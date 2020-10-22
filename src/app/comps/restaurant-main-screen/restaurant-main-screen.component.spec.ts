import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMainScreenComponent } from './restaurant-main-screen.component';

describe('RestaurantMainScreenComponent', () => {
  let component: RestaurantMainScreenComponent;
  let fixture: ComponentFixture<RestaurantMainScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantMainScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
