import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainSlideshowComponent } from './home-main-slideshow.component';

describe('HomeMainSlideshowComponent', () => {
  let component: HomeMainSlideshowComponent;
  let fixture: ComponentFixture<HomeMainSlideshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeMainSlideshowComponent]
    });
    fixture = TestBed.createComponent(HomeMainSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
