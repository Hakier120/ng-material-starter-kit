import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {CryptoServiceModule} from "./services/crypto.service-module";
import {CryptoListComponentModule} from "./components/crypto-list/crypto-list.component-module";
import {EmployeeListComponentModule} from "./components/employee-list/employee-list.component-module";
import {EmployeeServiceModule} from "./services/employee.service-module";
import {ProductListComponentModule} from "./components/product-list/product-list.component-module";
import {ProductsServiceModule} from "./services/products.service-module";







@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CryptoServiceModule,
    CryptoListComponentModule,
    EmployeeListComponentModule,
    EmployeeServiceModule,
    ProductListComponentModule,
    ProductsServiceModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
