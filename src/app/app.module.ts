import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvailableProductsListComponent } from './main-container/available-products-container/available-products-list/available-products-list.component';
import { ProductsFiltersComponent } from './main-container/available-products-container/products-filters/products-filters.component';
import { SelectedProductsListComponent } from './main-container/selected-products-list/selected-products-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { NgxColorsModule } from 'ngx-colors';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ShoppingListContainerComponent } from './main-container/main-container.component';
import { AvailableProductsContainerComponent } from './main-container/available-products-container/available-products-container.component';
import { UpdateProductComponent } from './main-container/update-product/update-product.component';
import { NewCategoryComponent } from './main-container/new-category/new-category.component';
import { NewProductComponent } from './main-container/new-product/new-product.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { allCategoriesReducer, allProductsReducer, productFiltersReducer } from './store/reducers';


@NgModule({
  declarations: [
    AppComponent,
    NewProductComponent,
    NewCategoryComponent,
    AvailableProductsListComponent,
    ProductsFiltersComponent,
    SelectedProductsListComponent,
    ShoppingListContainerComponent,
    UpdateProductComponent,
    AvailableProductsContainerComponent
  ],
  imports: [
    FlexLayoutModule,
    MatCardModule,
    MatDialogModule,
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

    StoreModule.forRoot({
      products: allProductsReducer,
      categories: allCategoriesReducer,
      filters: productFiltersReducer
    }),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
