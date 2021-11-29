import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../shared/types';

@Component({
  selector: 'app-available-products-list',
  templateUrl: './available-products-list.component.html',
  styleUrls: ['./available-products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvailableProductsListComponent implements OnInit {

  @Input() availableProducts: Product[] | null = [];

  @Output() deleteProductEvent = new EventEmitter<number>();
  @Output() productToUpdateEvent = new EventEmitter<Product>();
  @Output() addProductToShoppingListEvent = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

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
