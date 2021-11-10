import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeFormGroupComponent } from './employee-form-group/employee-form-group.component';



@NgModule({
  declarations: [
    EmployeeUpdateComponent,
    EmployeeAddComponent,
    EmployeeFormGroupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }
