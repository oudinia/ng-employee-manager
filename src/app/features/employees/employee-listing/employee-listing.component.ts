import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service';
import {Employee} from '../model/employee';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.scss']
})
export class EmployeeListingComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(console.log);
    const employeeToAdd = { firstName: 'Oussama', lastName: 'Dinia' } as Employee
    this.employeeService.addEmployee(employeeToAdd);
  }

}
