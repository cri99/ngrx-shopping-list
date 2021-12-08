import { ChangeDetectionStrategy, Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category, ProductFilters } from '../../../shared/types';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Utils } from '../../../shared/utils';

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
  @Output() productFiltersChangedEvent = new EventEmitter<ProductFilters>();

  constructor() { }

  ngOnInit(): void {
    this.initForm();
    this.initProductFiltersFormHandler();
  }

  private initForm() {
    this.productFiltersForm = new FormGroup({
      name: new FormControl(""),
      category: new FormControl()
    });
  }

  private initProductFiltersFormHandler() {
    this.productFiltersForm.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(Utils.compareProducts)
    ).subscribe((productFilterValue: ProductFilters)  => {
      this.productFiltersChangedEvent.emit(productFilterValue);
    });
  }
 
  resetFilters() {
    this.productFiltersForm.reset();
  }

}


