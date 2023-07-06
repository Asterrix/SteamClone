import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDiscountComponent } from './home-discount.component';

describe('HomeDiscountComponent', () => {
  let component: HomeDiscountComponent;
  let fixture: ComponentFixture<HomeDiscountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDiscountComponent]
    });
    fixture = TestBed.createComponent(HomeDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
