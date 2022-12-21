import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../services/employee.service';
import {EmployeeModel} from "../../model/employee.model";
import {CreateEmployeeModel} from "../../model/create-employee.model";

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserformComponent {
  readonly userForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    salary: new FormControl(null, [Validators.required])
  });

  constructor(private _employeeService: EmployeeService) {
  }

  OnButtonClicked(form: CreateEmployeeModel): void {
    this._employeeService.Create({id: form.id, name: form.name, mail: form.mail, age: form.age}).subscribe(
      ({
        complete() {
          alert('User was succesfully added to the system!')
        }
      })
    );


  }


}
