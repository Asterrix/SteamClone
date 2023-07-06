import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeaturedCategoryComponent } from './home-featured-category.component';

describe('HomeFeaturedCategoryComponent', () => {
  let component: HomeFeaturedCategoryComponent;
  let fixture: ComponentFixture<HomeFeaturedCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFeaturedCategoryComponent]
    });
    fixture = TestBed.createComponent(HomeFeaturedCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
