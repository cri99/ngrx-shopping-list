import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableProductsContainerComponent } from './available-products-container.component';

describe('AvailableProductsContainerComponent', () => {
  let component: AvailableProductsContainerComponent;
  let fixture: ComponentFixture<AvailableProductsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableProductsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableProductsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
