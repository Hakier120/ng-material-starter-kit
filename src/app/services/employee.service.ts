import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { EmployeeModel } from '../models/employee.model';
import { ApiResponse } from './api.response';
import { EmployeeResponse } from './employee.response';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees').pipe(
      take(1),
      map((response) => {
        return response.data.map((employeeResponse) => {
          return {
            employeeName: employeeResponse.employee_name,
            employeeSalary: employeeResponse.employee_salary,
            id: employeeResponse.id,
            profileImage: employeeResponse.profile_image,
            employeeAge: employeeResponse.employee_age,
          }
        });
      }));
  }

  getOne(id: string): Observable<EmployeeModel> {
    return this._httpClient.get<ApiResponse<EmployeeResponse>>('https://dummy.restapiexample.com/api/v1/employee/'+id).pipe(
      take(1),
      map((employeeResponse) => {

          return {
            employeeName: employeeResponse.data.employee_name,
            employeeSalary: employeeResponse.data.employee_salary,
            id: employeeResponse.data.id,
            profileImage: employeeResponse.data.profile_image,
            employeeAge: employeeResponse.data.employee_age,
          }
        }))
      };


}
