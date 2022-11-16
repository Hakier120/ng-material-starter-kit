import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DetailsComponent } from './details.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [DetailsComponent],
  providers: [],
  exports: [DetailsComponent]
})
export class DetailsComponentModule {
}
