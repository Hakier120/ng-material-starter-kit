import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { DogListComponent } from './dog-list.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [MatTableModule, MatCardModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [DogListComponent],
  providers: [],
  exports: [DogListComponent]
})
export class DogListComponentModule {
}
