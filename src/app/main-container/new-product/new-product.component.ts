import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product, Category } from '../../shared/types';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProductComponent {

  newProduct: Product = new Product();
  @Input() availableCategories: Category[] = [];
  @Output() newProductCreatedEvent = new EventEmitter<Product>();

  constructor() { }

  addNewProduct(newProductForm: NgForm): void {
    this.newProductCreatedEvent.emit(this.newProduct);
    this.resetForm(newProductForm);
  }

  resetForm(newProductForm: NgForm) {
    this.newProduct = new Product();
    newProductForm.reset();
  }
}
