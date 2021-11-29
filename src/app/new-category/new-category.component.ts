import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category, Product } from '../shared/types';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCategoryComponent implements OnInit {

  newCategory: Category = new Category();
  @Output() newCategoryCreated = new EventEmitter<Category>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewCategory(newCategoryForm: NgForm) {
    this.newCategoryCreated.emit(this.newCategory);
    this.newCategory = new Category();
    newCategoryForm.reset();

  }

}
