import { ChangeDetectionStrategy, Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category, ProductFilters } from '../shared/types';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrls: ['./products-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProductsFiltersComponent implements OnInit {

  productFiltersForm!: FormGroup;
  productFilters = new ProductFilters();
  
  @Input() availableCategories: Category[] = [];
  @Output() productFiltersChanged = new EventEmitter<ProductFilters>();

  constructor() { }

  ngOnInit(): void {
    this.initForm();
    this.initProductFiltersFormHandler();
  }

  private initForm() {
    this.productFiltersForm = new FormGroup({
      name: new FormControl("", Validators.required),
      category: new FormControl()
    });
  }

  private initProductFiltersFormHandler() {
    this.productFiltersForm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(this.compareProductFilters)
    ).subscribe((productFilterValue: ProductFilters)  => {
      this.productFiltersChanged.emit(productFilterValue);
    });
  }
 
  resetFilters() {
    this.productFiltersForm.reset();
  }

  private compareProductFilters(current: ProductFilters, previous: ProductFilters): boolean {
    return current.name === previous.name && current.category?.id === previous.category?.id;
  }

}


