import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { UserDetailsComponent } from './user-details.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatButtonToggleModule],
  declarations: [UserDetailsComponent],
  providers: [],
  exports: [UserDetailsComponent]
})
export class UserDetailsComponentModule {
}
