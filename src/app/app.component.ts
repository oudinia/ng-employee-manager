import {Component, OnInit} from '@angular/core';
import {EmployeesService} from './core/services/employees.service';
import {Employee} from './core/models/employee';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'employee-manager';
  employees!: Observable<Employee[]>;

  constructor(private employeesService: EmployeesService) {
  }

  ngOnInit(): void {
    this.employees = this.employeesService.getEmployees();
  }
}
