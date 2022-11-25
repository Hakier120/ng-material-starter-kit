import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { NewProductListComponent } from './new-product-list.component';
import {RouterLink} from "@angular/router";

@NgModule({
    imports: [MatCardModule, MatListModule, CommonModule, RouterLink],
  declarations: [NewProductListComponent],
  providers: [],
  exports: [NewProductListComponent]
})
export class NewProductListComponentModule {
}
