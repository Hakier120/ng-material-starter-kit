import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, take} from 'rxjs';
import { AdvancedEmployeeModel } from '../models/advanced-employee.model';
import {map} from "rxjs/operators";
import {ApiResponse} from "./api.response";
import {EmployeeResponse} from "./employee.response";

@Injectable()
export class AdvancedEmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<AdvancedEmployeeModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees').pipe(
      take(1),
      map((response) => {
        return response.data.map((employeeResponse) => {
          return {
            employee_name: employeeResponse.employee_name,
            employee_salary: employeeResponse.employee_salary,
            employee_age: employeeResponse.employee_age,
            profile_image: employeeResponse.profile_image,
            id: employeeResponse.id,
          }
        });
      }));
  }
}

