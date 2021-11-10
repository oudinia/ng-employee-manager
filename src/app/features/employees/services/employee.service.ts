import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Employee} from '../model/employee';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmployeeService {
  apiUrl = environment.apiUrl + 'employees';

  constructor(private httpClient: HttpClient) {
  }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.apiUrl)
  }

  getEmployeeById(employeeId: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.apiUrl}/${employeeId}`);
  }

  addEmployee(employee: Employee): Observable<Employee>{
    return  this.httpClient.post<Employee>(this.apiUrl, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.apiUrl, employee);
  }

  deleteEmployee(employeeId: string) {
    return this.httpClient.delete(`${this.apiUrl}/${employeeId}`);
  }
}
