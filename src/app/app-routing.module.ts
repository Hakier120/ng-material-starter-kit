import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { EmployeeListComponentModule } from './components/employee-list/employee-list.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';

@NgModule({
  imports: [RouterModule.forRoot([ { path: 'employees-master-details', component: EmployeeListComponent }, { path: 'crypto-master-details', component: CryptoListComponent }]), ProductListComponentModule, ProductsServiceModule, EmployeeListComponentModule, EmployeeServiceModule, CryptoListComponentModule, CryptoServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
