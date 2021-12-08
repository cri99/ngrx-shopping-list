import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ProductsService } from '../../shared/products.service';
import { Category, Product, ProductFilters } from '../../shared/types';
import { UpdateProductModalData, UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-available-products-container',
  templateUrl: './available-products-container.component.html',
  styleUrls: ['./available-products-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvailableProductsContainerComponent implements OnInit {

  @Input() availableCategories: Category[] = [];
  
  availableProducts$!: Observable<Product[]>;

  constructor(
    private dialog: MatDialog,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.availableProducts$ = this.productsService.getAvailableProducts$();
  }

  onDeleteProduct(productToDeleteID: number) {
    this.productsService.deleteProduct(productToDeleteID);
  }

  onProductToUpdate(productToUpdate: Product) {
    this.openUpdateProductModal(productToUpdate);
  }

  private openUpdateProductModal(productToUpdate: Product) {
    const updateProductModalData: UpdateProductModalData = {
      availableCategories: this.availableCategories,
      productToUpdate
    }

    this.dialog.open(UpdateProductComponent, { data: updateProductModalData, minWidth: 350 }).afterClosed()
      .pipe(
        filter((product: Product) => !!product) // Uguale a scrivere -> filter(product => product !== undefined && product !== null)
      ).subscribe((updatedProduct: Product) => {
        this.productsService.updateProduct(updatedProduct);
      })
  }

  onAddProductToShoppingList(productToAdd: Product) {
    this.productsService.addProductToShoppingList(productToAdd);
  }

  onProductFiltersChanged(newProductFiltes: ProductFilters) {
    this.productsService.updateProductsFilters(newProductFiltes);
  }

}
