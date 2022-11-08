import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CategoryComponent } from './category.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [CategoryComponent],
  providers: [],
  exports: [CategoryComponent]
})
export class CategoryComponentModule {
}
