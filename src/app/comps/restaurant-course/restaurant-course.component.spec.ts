import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCourseComponent } from './restaurant-course.component';

describe('RestaurantCourseComponent', () => {
  let component: RestaurantCourseComponent;
  let fixture: ComponentFixture<RestaurantCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
