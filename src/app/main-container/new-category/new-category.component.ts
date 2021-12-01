import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/shared/types';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCategoryComponent {

  newCategory: Category = new Category();
  @Output() newCategoryCreatedEvent = new EventEmitter<Category>();

  constructor() { }

  addNewCategory(newCategoryForm: NgForm) {
    this.newCategoryCreatedEvent.emit(this.newCategory);
    this.resetForm(newCategoryForm);
  }

  private resetForm(newCategoryForm: NgForm) {
    this.newCategory = new Category();
    newCategoryForm.reset();
  }

}
