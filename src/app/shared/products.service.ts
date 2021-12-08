import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product, ProductFilters } from './types';
import { DEFAULT_PRODUCTS } from './utils';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly _allProducts$ = new BehaviorSubject<Product[]>(DEFAULT_PRODUCTS);
  private readonly _productFilters$ = new BehaviorSubject<ProductFilters>({});
  
  constructor() {}

  private applyProductsFilters(products: Product[], filters: ProductFilters): Product[] {
    return products.filter(product => {
      return  (!filters.name || product.name.toLowerCase().includes(filters.name.toLowerCase())) && 
              (!filters.category || filters.category.id === product.category?.id)
      }
    );
  }

  getInListProducts$(): Observable<Product[]> {
    return this._allProducts$.pipe(
      this.filterProductsByListPresence()    
    )
  }

  getAvailableProducts$(): Observable<Product[]> {
    return combineLatest([
        this._allProducts$.pipe(this.filterProductsByListPresence(false)), 
        this._productFilters$
    ]).pipe(
        map(([products, filters]) => this.applyProductsFilters(products, filters))
    )
  }

  private filterProductsByListPresence(inList = true) {
    return (sourceObservable: Observable<Product[]>) => {
      return sourceObservable.pipe(
        map(products => products.filter(product => product.inList === inList))
      );
    }
  }

  updateProductsFilters(productFilters: ProductFilters) {
    this._productFilters$.next(productFilters);
  }

  addNewProduct(newProduct: Product) {
    const currentProducts = this._allProducts$.value;
    currentProducts.push(newProduct);
    this._allProducts$.next(currentProducts);
  }

  updateProduct(updatedProduct: Product) {
    const currentProducts = this._allProducts$.value;
    const idxOfProductToUpdate = currentProducts.findIndex(product => product.id === updatedProduct.id);
    currentProducts[idxOfProductToUpdate] = updatedProduct;
    this._allProducts$.next(currentProducts);
  }

  deleteProduct(productToDeleteId: number) {
    const currentProducts = this._allProducts$.value;
    const idxOfProductToDelete = currentProducts.findIndex(product => product.id === productToDeleteId);
    currentProducts.splice(idxOfProductToDelete, 1);
    this._allProducts$.next(currentProducts);
  }

  markProductAsPurchased(purchasedProduct: Product) {
    this.updateProduct({...purchasedProduct, inList: false});
  }

  addProductToShoppingList(productToAdd: Product) {
    this.updateProduct({...productToAdd, inList: true});
  }

}
