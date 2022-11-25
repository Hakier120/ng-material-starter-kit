import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NewAddProductComponent } from './new-add-product.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [NewAddProductComponent],
  providers: [],
  exports: [NewAddProductComponent]
})
export class NewAddProductComponentModule {
}
