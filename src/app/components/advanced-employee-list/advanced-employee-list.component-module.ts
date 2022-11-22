import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AdvancedEmployeeListComponent } from './advanced-employee-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [AdvancedEmployeeListComponent],
  providers: [],
  exports: [AdvancedEmployeeListComponent]
})
export class AdvancedEmployeeListComponentModule {
}
