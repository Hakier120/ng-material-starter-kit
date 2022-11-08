import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-create-employee',
  styleUrls: ['./create-employee.component.scss'],
  templateUrl: './create-employee.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEmployeeComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(), salary: new FormControl(), age: new FormControl()
  });

  constructor(private _employeesService: EmployeesService) {
  }

  onEmployeeFormSubmitted(employeeForm: FormGroup): void {
    this._employeesService.create({
      name: employeeForm.get('name')?.value,
      age: employeeForm.get('age')?.value,
      salary: employeeForm.get('salary')?.value,
    }).subscribe();
  }
}
