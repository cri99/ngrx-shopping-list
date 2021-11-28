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

  @Output() deleteProduct = new EventEmitter<Product>();
  @Output() updateProduct = new EventEmitter<Product>();
  @Output() addProductToShoppingList = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateProduct(productToUpdate: Product) {
    this.updateProduct.emit(productToUpdate);
  }

  onDeleteProduct(productToDelete: Product) {
    this.deleteProduct.emit(productToDelete);
  }

  onAddProductToShoppingList(productToAdd: Product) {
    this.addProductToShoppingList.emit(productToAdd)
  }

}
