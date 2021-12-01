import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter, TrackByFunction } from '@angular/core';
import { Utils } from 'src/app/shared/utils';
import { Product } from '../../shared/types';

@Component({
  selector: 'app-selected-products-list',
  templateUrl: './selected-products-list.component.html',
  styleUrls: ['./selected-products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedProductsListComponent implements OnInit {

  @Input() shoppingListProducts!: Product[];
  @Output() purchasedProductEvent = new EventEmitter<Product>();
  trackProductByIDFn: TrackByFunction<Product> = Utils.getTrackProductByIDFn();
  
  constructor() { }

  ngOnInit(): void {}

  markProductAsPurchased(product: Product) {
    this.purchasedProductEvent.emit(product);
  }

}