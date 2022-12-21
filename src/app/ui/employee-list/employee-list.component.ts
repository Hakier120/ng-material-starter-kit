import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Observable,} from "rxjs";
import {PersonModel} from "../../model/person.model";


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) {
  }

  data$: Observable<PersonModel[] | null> = this._employeeService.getAll()

  delete(id: string): Observable<void> {
    return this._employeeService.delete(id)


  }
}
