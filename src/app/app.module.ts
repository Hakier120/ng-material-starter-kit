import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {DogListComponentModule} from "./components/dog-list/dog-list.component-module";
import {DogsServiceModule} from "./services/dogs.service-module";
import {SameCityDogsServiceModule} from "./services/same-city-dogs.service-module";
import {TestServiceModule} from "./services/test.service-module";
import {TestComponentModule} from "./components/test/test.component-module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DogListComponentModule,
    DogsServiceModule,
    SameCityDogsServiceModule,
    TestServiceModule,
    TestComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
