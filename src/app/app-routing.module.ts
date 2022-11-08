import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {CategoryComponent} from './components/category/category.component';
import {SymbolssComponent} from './components/symbolss/symbolss.component';
import {PublicHolidaysComponent} from './components/public-holidays/public-holidays.component';
import {CategoriesCheckboxComponent} from './components/categories-checkbox/categories-checkbox.component';
import {CategoriesMenuComponent} from './components/categories-menu/categories-menu.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {CreateEmployeeComponent} from './components/create-employee/create-employee.component';
import {ProductListComponentModule} from './components/product-list/product-list.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {CategoryComponentModule} from './components/category/category.component-module';
import {SymbolssComponentModule} from './components/symbolss/symbolss.component-module';
import {SymbolsServiceModule} from './services/symbols.service-module';
import {PublicHolidaysComponentModule} from './components/public-holidays/public-holidays.component-module';
import {HolidaysServiceModule} from './services/holidays.service-module';
import {CategoriesServiceModule} from './services/categories.service-module';
import {CategoriesCheckboxComponentModule} from './components/categories-checkbox/categories-checkbox.component-module';
import {CategoriesMenuComponentModule} from './components/categories-menu/categories-menu.component-module';
import {ProductFormComponentModule} from './components/product-form/product-form.component-module';
import {NewProductServiceModule} from './services/newproduct.service-module';
import {CreateEmployeeComponentModule} from './components/create-employee/create-employee.component-module';
import {EmployeesServiceModule} from './services/employees.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'products', component: ProductListComponent}, {
    path: 'categories',
    component: CategoryComponent
  }, {path: 'crypto', component: SymbolssComponent}, {
    path: 'public-holidays',
    component: PublicHolidaysComponent
  }, {path: 'checkbox-categories', component: CategoriesCheckboxComponent}, {
    path: 'categories-menu',
    component: CategoriesMenuComponent
  }, {path: 'create-product', component: ProductFormComponent}, {
    path: 'create-employee',
    component: CreateEmployeeComponent
  }]), ProductListComponentModule, ProductsServiceModule, CategoryComponentModule, SymbolssComponentModule,
    SymbolsServiceModule, PublicHolidaysComponentModule, HolidaysServiceModule, CategoriesServiceModule,
    CategoriesCheckboxComponentModule, CategoriesMenuComponentModule, ProductFormComponentModule, NewProductServiceModule,
    CreateEmployeeComponentModule, EmployeesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
