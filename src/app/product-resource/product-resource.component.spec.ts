import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductResourceComponent } from './product-resource.component';

describe('ProductResourceComponent', () => {
  let component: ProductResourceComponent;
  let fixture: ComponentFixture<ProductResourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductResourceComponent]
    });
    fixture = TestBed.createComponent(ProductResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
