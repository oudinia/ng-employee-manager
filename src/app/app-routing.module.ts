import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListingComponent} from './features/employees/employee-listing/employee-listing.component';
import {EmployeeUpdateComponent} from './features/employees/employee-update/employee-update.component';
import {EmployeeAddComponent} from './features/employees/employee-add/employee-add.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListingComponent},
  {path: 'employees-update/:id', component: EmployeeUpdateComponent},
  {path: 'employees-add', component: EmployeeAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
