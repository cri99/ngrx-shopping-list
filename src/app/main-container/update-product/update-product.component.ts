import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { Category, Product } from 'src/app/shared/types';
import { Utils } from 'src/app/shared/utils';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateProductComponent implements OnInit {

  updateProductForm!: FormGroup;
  productChangedFromInitial$!: Observable<boolean>; 
  private productToUpdate!: Product;

  constructor(
    public dialogRef: MatDialogRef<UpdateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public updateProductModalData: UpdateProductModalData,
  ) {}

  ngOnInit(): void {
    this.productToUpdate = this.updateProductModalData.productToUpdate;

    this.updateProductForm = this.buildUpdateProductForm(this.productToUpdate);

    this.productChangedFromInitial$ = this.updateProductForm.valueChanges.pipe(
      startWith(this.productToUpdate),
      map(updatedProduct => Utils.compareProducts(updatedProduct, this.productToUpdate)),
      distinctUntilChanged()
    );
  }

  private buildUpdateProductForm(productToUpdate: Product): FormGroup {
    const formGroup = new FormGroup({
      name: new FormControl(["", Validators.required]),
      category: new FormControl(null, Validators.required)
    });

    formGroup.patchValue(productToUpdate);
    return formGroup;
  }

  updateProduct() {
    this.dialogRef.close({...this.productToUpdate, ...this.updateProductForm.value});
  }

}

export interface UpdateProductModalData {
  productToUpdate: Product,
  availableCategories: Category[]
}