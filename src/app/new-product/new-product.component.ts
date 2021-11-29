import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category, Product } from '../shared/types';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProductComponent implements OnInit {

  newProduct: Product = new Product();
  @Input() availableCategories: Category[] | null = [];
  @Output() newProductCreated = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
      
  }

  addNewProduct(newProductForm: NgForm): void {
    this.newProductCreated.emit(this.newProduct);
    this.newProduct = new Product();
    newProductForm.reset();
  }



}
