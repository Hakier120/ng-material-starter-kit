import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { SymbolssComponent } from './symbolss.component';

@NgModule({
  imports: [MatCardModule, MatChipsModule, CommonModule],
  declarations: [SymbolssComponent],
  providers: [],
  exports: [SymbolssComponent]
})
export class SymbolssComponentModule {
}
