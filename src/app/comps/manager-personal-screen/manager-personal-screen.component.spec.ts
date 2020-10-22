import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPersonalScreenComponent } from './manager-personal-screen.component';

describe('ManagerPersonalScreenComponent', () => {
  let component: ManagerPersonalScreenComponent;
  let fixture: ComponentFixture<ManagerPersonalScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerPersonalScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerPersonalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
