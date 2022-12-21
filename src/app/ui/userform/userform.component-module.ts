import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserformComponent} from './userform.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [UserformComponent],
  providers: [],
  exports: [UserformComponent]
})
export class UserformComponentModule {
}
