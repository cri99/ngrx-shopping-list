import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, Category, Product } from '../shared/types';
import { addNewCategory, addNewProduct, updateProduct } from '../store/actions';
import { selectShoppingListProducts } from '../store/selectors';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingListContainerComponent implements OnInit {

  availableCategories$!: Observable<Category[]>;
  shoppingListProducts$!: Observable<Product[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.availableCategories$ = this.store.select('categories');
    this.shoppingListProducts$ = this.store.select(selectShoppingListProducts);
  }

  onNewProductCreated(newProduct: Product) {
    this.store.dispatch(addNewProduct(newProduct));
  }

  onNewCategoryCreated(newCategory: Category) {
    this.store.dispatch(addNewCategory(newCategory));
  }

  onPurchasedProduct(purchasedProduct: Product) {
    this.store.dispatch(updateProduct({...purchasedProduct, inList: false}));
  }

}
