import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedProductsListComponent } from './selected-products-list.component';

describe('SelectedProductsListComponent', () => {
  let component: SelectedProductsListComponent;
  let fixture: ComponentFixture<SelectedProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedProductsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
