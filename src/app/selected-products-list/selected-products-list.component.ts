import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../shared/types';

@Component({
  selector: 'app-selected-products-list',
  templateUrl: './selected-products-list.component.html',
  styleUrls: ['./selected-products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedProductsListComponent implements OnInit {

  @Input() shoppingListProducts!: Product[];
  @Output() purchasedProductEvent = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {}

  markProductAsPurchased(product: Product) {
    this.purchasedProductEvent.emit(product);
  }

}