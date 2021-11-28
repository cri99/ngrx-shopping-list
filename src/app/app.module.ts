import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewProductComponent } from './new-product/new-product.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { AvailableProductsListComponent } from './available-products-list/available-products-list.component';
import { ProductsFiltersComponent } from './products-filters/products-filters.component';
import { SelectedProductsListComponent } from './selected-products-list/selected-products-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { NgxColorsModule } from 'ngx-colors';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { ShoppingListContainerComponent } from './shopping-list-container/shopping-list-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NewProductComponent,
    NewCategoryComponent,
    AvailableProductsListComponent,
    ProductsFiltersComponent,
    SelectedProductsListComponent,
    ShoppingListContainerComponent
  ],
  imports: [
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    NgxColorsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
