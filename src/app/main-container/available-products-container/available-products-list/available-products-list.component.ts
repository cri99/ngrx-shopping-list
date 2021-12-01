import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, TrackByFunction } from '@angular/core';
import { Utils } from 'src/app/shared/utils';
import { Product } from '../../../shared/types';

@Component({
  selector: 'app-available-products-list',
  templateUrl: './available-products-list.component.html',
  styleUrls: ['./available-products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvailableProductsListComponent {

  @Input() availableProducts: Product[] = [];

  @Output() deleteProductEvent = new EventEmitter<number>();
  @Output() productToUpdateEvent = new EventEmitter<Product>();
  @Output() addProductToShoppingListEvent = new EventEmitter<Product>();

  trackProductByIDFn: TrackByFunction<Product> = Utils.getTrackProductByIDFn();

  constructor() { }

  onProductToUpdate(productToUpdate: Product) {
    this.productToUpdateEvent.emit(productToUpdate);
  }

  onDeleteProduct(productToDeleteID: number) {
    this.deleteProductEvent.emit(productToDeleteID);
  }

  onAddProductToShoppingList(productToAdd: Product) {
    this.addProductToShoppingListEvent.emit(productToAdd)
  }
}
