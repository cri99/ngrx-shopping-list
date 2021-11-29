import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { CategoriesService } from '../shared/categories.service';
import { ProductsService } from '../shared/products.service';
import { Category, Product, ProductFilters } from '../shared/types';
import { Utils } from '../shared/utils';
import { UpdateProductComponent, UpdateProductModalData } from '../update-product/update-product.component';

@Component({
  selector: 'app-shopping-list-container',
  templateUrl: './shopping-list-container.component.html',
  styleUrls: ['./shopping-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingListContainerComponent implements OnInit {

  availableProducts$!: Observable<Product[]>;
  availableCategories$!: Observable<Category[]>;
  shoppingListProducts$!: Observable<Product[]>;

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.availableCategories$ = this.categoriesService.getAllCategories$();
    this.availableProducts$ = this.productsService.getAvailableProducts$();
    this.shoppingListProducts$ = this.productsService.getInListProducts$();
  }

  onNewProductCreated(newProduct: Product) {
    this.productsService.addNewProduct(newProduct);
  }

  onDeleteProduct(productToDeleteID: number) {
    this.productsService.deleteProduct(productToDeleteID);
  }

  onProductFiltersChanged(productFilters: ProductFilters) {
    this.productsService.updateProductsFilters(productFilters);
  }

  onNewCategoryCreated(newCategory: Category) {
    this.categoriesService.addNewCategory(newCategory);
  }

  onAddProductToShoppingList(product: Product) {
    this.productsService.addProductToShoppingList(product);
  }

  onPurchasedProduct(purchasedProduct: Product) {
    this.productsService.markProductAsPurchased(purchasedProduct);
  }

  onProductToUpdate(productToUpdate: Product) {
    const updateProductModalData: UpdateProductModalData = {
      availableCategories$: this.availableCategories$,
      productToUpdate
    }

    this.dialog.open(UpdateProductComponent, { data: updateProductModalData }).afterClosed()
      .pipe(
        filter((product: Product) => !!product) // Stessa cosa che scrivere -> filter(product => product !== undefined && product !== null)
      ).subscribe((updatedProduct: Product) => {
        console.log(updatedProduct)
        this.productsService.updateProduct(updatedProduct);
      })
  }


}
