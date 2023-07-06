import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardSmallComponent } from './item-card-small.component';

describe('ItemCardSmallComponent', () => {
  let component: ItemCardSmallComponent;
  let fixture: ComponentFixture<ItemCardSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemCardSmallComponent]
    });
    fixture = TestBed.createComponent(ItemCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
