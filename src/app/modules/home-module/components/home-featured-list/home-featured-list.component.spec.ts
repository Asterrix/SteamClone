import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeaturedListComponent } from './home-featured-list.component';

describe('HomeFeaturedListComponent', () => {
  let component: HomeFeaturedListComponent;
  let fixture: ComponentFixture<HomeFeaturedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFeaturedListComponent]
    });
    fixture = TestBed.createComponent(HomeFeaturedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
