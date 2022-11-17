import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { UserDetComponent } from './user-det.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [UserDetComponent],
  providers: [],
  exports: [UserDetComponent]
})
export class UserDetComponentModule {
}
