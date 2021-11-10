import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormGroupComponent } from './employee-form-group.component';

describe('EmployeeFormGroupComponent', () => {
  let component: EmployeeFormGroupComponent;
  let fixture: ComponentFixture<EmployeeFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
