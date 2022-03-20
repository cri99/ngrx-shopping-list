import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { deleteProduct, updateProduct, updateProductFilters } from 'src/app/store/actions';
import { selectAvailableProducts } from 'src/app/store/selectors';
import { AppState, Category, Product, ProductFilters } from '../../shared/types';
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
  productFilters$!: Observable<ProductFilters>;

  constructor(
    private dialog: MatDialog,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.availableProducts$ = this.store.select(selectAvailableProducts);
    this.productFilters$ =  this.store.select('filters');
  }

  onDeleteProduct(productToDeleteId: number) {
    this.store.dispatch(deleteProduct({productToDeleteId}));
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
        filter((product: Product) => !!product) 
      ).subscribe((updatedProduct: Product) => {
        this.store.dispatch(updateProduct(updatedProduct));
      })
  }

  onAddProductToShoppingList(productToAdd: Product) {
    this.store.dispatch(updateProduct({...productToAdd, inList: true}));
  }

  onProductFiltersChanged(newProductFilters: ProductFilters) {
    this.store.dispatch(updateProductFilters(newProductFilters));
  }

}
