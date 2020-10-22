import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPersonalScreenComponent } from './customer-personal-screen.component';

describe('CustomerPersonalScreenComponent', () => {
  let component: CustomerPersonalScreenComponent;
  let fixture: ComponentFixture<CustomerPersonalScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPersonalScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPersonalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
