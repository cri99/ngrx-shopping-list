import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category, Product } from '../shared/types';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProductComponent implements OnInit {

  newProduct: Product = new Product();
  @Input() availableCategories: Category[] = [];
  @Output() newProductCreated = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {

  }

  addNewProduct(): void {
    this.newProductCreated.emit(this.newProduct);
  }



}
