import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RegistersService} from '../../services/registers.service';

@Component({
  selector: 'app-register-form',
  styleUrls: ['./register-form.component.scss'],
  templateUrl: './register-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent {
  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    city: new FormControl(),
    street: new FormControl(),
    number: new FormControl(),
    zipcode: new FormControl(),
    phone: new FormControl()
  });

  constructor(private _registersService: RegistersService) {
  }

  onRegisterFormSubmitted(registerForm: FormGroup): void {
    this._registersService.create({
      email: registerForm.get('email')?.value,
      username: registerForm.get('username')?.value,
      password: registerForm.get('password')?.value,
      firstname: registerForm.get('firstname')?.value,
      lastname: registerForm.get('lastname')?.value,
      city: registerForm.get('city')?.value,
      street: registerForm.get('street')?.value,
      number: registerForm.get('number')?.value,
      zipcode: registerForm.get('zipcode')?.value,
      phone: registerForm.get('phone')?.value,
    }).subscribe();
  }
}
