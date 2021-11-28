import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, merge, Observable, ReplaySubject } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { Product, ProductFilters } from './types';
import { DEFAULT_PRODUCTS } from './utils';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly _allProducts$ = new BehaviorSubject<Product[]>(DEFAULT_PRODUCTS);
  private readonly _productFilters$ = new BehaviorSubject<ProductFilters>({ category: undefined, name: ""});


  constructor() { 
  }

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

  newProductsFilters(productFilters: ProductFilters) {
    this._productFilters$.next(productFilters);
  }
}
