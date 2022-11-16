import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CartListComponent } from './cart-list.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [CartListComponent],
  providers: [],
  exports: [CartListComponent]
})
export class CartListComponentModule {
}
