import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCategoryItemListComponent } from './home-category-item-list.component';

describe('HomeCategoryItemListComponent', () => {
  let component: HomeCategoryItemListComponent;
  let fixture: ComponentFixture<HomeCategoryItemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCategoryItemListComponent]
    });
    fixture = TestBed.createComponent(HomeCategoryItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
