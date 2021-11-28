import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-products-list',
  templateUrl: './selected-products-list.component.html',
  styleUrls: ['./selected-products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedProductsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
