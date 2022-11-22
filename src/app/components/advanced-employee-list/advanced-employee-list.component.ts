import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, map, Observable, of, ReplaySubject, switchMap, combineLatest, min} from 'rxjs';
import {AdvancedEmployeeModel} from '../../models/advanced-employee.model';
import {AdvancedEmployeeService} from '../../services/advanced-employee.service';



interface Age {
  min: number,
  max: number
}

@Component({
  selector: 'app-advanced-employee-list',
  templateUrl: './advanced-employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedEmployeeListComponent {

  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');

  private _ageSubject: BehaviorSubject<Age> = new BehaviorSubject<Age>({min: 0, max: 100});

  age$: Observable<Age[]>= of([{
    min: 0, max: 20

  },{min: 21, max: 30}, {min: 31, max: 40}, {min: 41, max: 50}, {min: 51, max: 100}])

  readonly employeeList$: Observable<AdvancedEmployeeModel[]> = combineLatest([
    this._orderSubject.asObservable(),
    this._ageSubject.asObservable()
  ]).pipe(switchMap(([order, age]) => this._advancedEmployeeService.getAll().pipe(
    map((employee) => {
      return employee.sort((a, b) => {
        if (a.employee_salary > b.employee_salary) return order === 'asc' ? 1 : -1;
        if (a.employee_salary < b.employee_salary) return order === 'desc' ? -1 : 1;
        return 0;
      })
    }),
    map((employees) => {return employees.filter((employee) => employee.employee_age > age.min && employee.employee_age < age.max)})
  )))

  constructor(private _advancedEmployeeService: AdvancedEmployeeService) {
  }

  getOrder(order: string) {
    this._orderSubject.next(order)
  }
  getAge(min: number, max: number) {
    this._ageSubject.next({max: max, min: min})
  }

}

