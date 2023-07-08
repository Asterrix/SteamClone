import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeCategorySlideshowComponent} from './home-category-slideshow.component';

describe('HomeCategorySlideshowComponent', () => {
  let component: HomeCategorySlideshowComponent;
  let fixture: ComponentFixture<HomeCategorySlideshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCategorySlideshowComponent]
    });
    fixture = TestBed.createComponent(HomeCategorySlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
