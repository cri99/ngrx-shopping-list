import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../shared/products.service';
import { Product } from '../shared/types';

@Component({
  selector: 'app-shopping-list-container',
  templateUrl: './shopping-list-container.component.html',
  styleUrls: ['./shopping-list-container.component.scss']
})
export class ShoppingListContainerComponent implements OnInit {

  availableProducts$!: Observable<Product[]>;
  inListProducts$!: Observable<Product[]>;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.availableProducts$ = this.productsService.getAvailableProducts$();
    this.inListProducts$ = this.productsService.getInListProducts$();
  }

}
