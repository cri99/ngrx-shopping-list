import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CategoriesService } from '../shared/categories.service';
import { ProductsService } from '../shared/products.service';
import { Category, Product } from '../shared/types';

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
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.availableCategories$ = this.categoriesService.getAllCategories$();
    this.shoppingListProducts$ = this.productsService.getInListProducts$();
  }

  onNewProductCreated(newProduct: Product) {
    this.productsService.addNewProduct(newProduct);
  }

  onNewCategoryCreated(newCategory: Category) {
    this.categoriesService.addNewCategory(newCategory);
  }

  onPurchasedProduct(purchasedProduct: Product) {
    this.productsService.markProductAsPurchased(purchasedProduct);
  }

}
