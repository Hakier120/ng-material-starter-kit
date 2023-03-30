import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { TestComponent } from './test.component';
import {RouterLink} from "@angular/router";

@NgModule({
    imports: [MatCardModule, MatListModule, CommonModule, RouterLink],
  declarations: [TestComponent],
  providers: [],
  exports: [TestComponent]
})
export class TestComponentModule {
}
