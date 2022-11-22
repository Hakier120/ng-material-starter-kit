import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CategoryComponent} from './components/category/category.component';
import {SymbolssComponent} from './components/symbolss/symbolss.component';
import {PublicHolidaysComponent} from './components/public-holidays/public-holidays.component';
import {CategoriesCheckboxComponent} from './components/categories-checkbox/categories-checkbox.component';
import {CategoriesMenuComponent} from './components/categories-menu/categories-menu.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {CreateEmployeeComponent} from './components/create-employee/create-employee.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {CatFactComponent} from './components/cat-fact/cat-fact.component';
import {AgePredictionComponent} from './components/age-prediction/age-prediction.component';
import {DetailsComponent} from './components/details/details.component';
import {CartListComponent} from './components/cart-list/cart-list.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserDetComponent} from './components/user-det/user-det.component';
import {FilteredProductListComponent} from './components/filtered-product-list/filtered-product-list.component';
import {
  NewFilteredProductListComponent
} from './components/new-filtered-product-list/new-filtered-product-list.component';
import {SortedProductListComponent} from './components/sorted-product-list/sorted-product-list.component';
import {AdvancedEmployeeListComponent} from './components/advanced-employee-list/advanced-employee-list.component';
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
import {LoginFormComponentModule} from './components/login-form/login-form.component-module';
import {LoginServiceModule} from './services/login.service-module';
import {ProductCategoriesServiceModule} from './services/product-categories.service-module';
import {RegisterFormComponentModule} from './components/register-form/register-form.component-module';
import {RegistersServiceModule} from './services/registers.service-module';
import {CatFactComponentModule} from './components/cat-fact/cat-fact.component-module';
import {CatServiceModule} from './services/cat.service-module';
import {AgePredictionComponentModule} from './components/age-prediction/age-prediction.component-module';
import {AgeServiceModule} from './services/age.service-module';
import {DetailsComponentModule} from './components/details/details.component-module';
import {DetailsServiceModule} from './services/details.service-module';
import {CartListComponentModule} from './components/cart-list/cart-list.component-module';
import {CartServiceModule} from './services/cart.service-module';
import {UserDetailsComponentModule} from './components/user-details/user-details.component-module';
import {UserServiceModule} from './services/user.service-module';
import {NewServiceModule} from './services/new.service-module';
import {UserDetComponentModule} from './components/user-det/user-det.component-module';
import {
  FilteredProductListComponentModule
} from './components/filtered-product-list/filtered-product-list.component-module';
import {NewCategoriesServiceModule} from './services/new-categories.service-module';
import {
  NewFilteredProductListComponentModule
} from './components/new-filtered-product-list/new-filtered-product-list.component-module';
import {SortedProductListComponentModule} from './components/sorted-product-list/sorted-product-list.component-module';
import {
  AdvancedEmployeeListComponentModule
} from './components/advanced-employee-list/advanced-employee-list.component-module';
import {AdvancedEmployeeServiceModule} from './services/advanced-employee.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'categories', component: CategoryComponent}, {
    path: 'crypto',
    component: SymbolssComponent
  }, {path: 'public-holidays', component: PublicHolidaysComponent}, {
    path: 'checkbox-categories',
    component: CategoriesCheckboxComponent
  }, {path: 'categories-menu', component: CategoriesMenuComponent}, {
    path: 'create-product',
    component: ProductFormComponent
  }, {path: 'create-employee', component: CreateEmployeeComponent}, {
    path: 'login',
    component: LoginFormComponent
  }, {path: 'register', component: RegisterFormComponent}, {
    path: 'cat-fact',
    component: CatFactComponent
  }, {path: 'age/:name', component: AgePredictionComponent}, {
    path: 'product/:id',
    component: DetailsComponent
  }, {path: 'cart/:id', component: CartListComponent}, {
    path: 'user/:id',
    component: UserDetailsComponent
  }, {path: 'newuser/:name', component: UserDetComponent}, {
    path: 'products/:category',
    component: FilteredProductListComponent
  }, {path: 'products', component: NewFilteredProductListComponent}, {
    path: 'sorted-products',
    component: SortedProductListComponent
  }, {
    path: 'advanced-employee',
    component: AdvancedEmployeeListComponent
  }]), ProductsServiceModule, CategoryComponentModule, SymbolssComponentModule, SymbolsServiceModule, PublicHolidaysComponentModule, HolidaysServiceModule, CategoriesServiceModule, CategoriesCheckboxComponentModule, CategoriesMenuComponentModule, ProductFormComponentModule, NewProductServiceModule, CreateEmployeeComponentModule, EmployeesServiceModule, LoginFormComponentModule, LoginServiceModule, ProductCategoriesServiceModule, RegisterFormComponentModule, RegistersServiceModule, CatFactComponentModule, CatServiceModule, AgePredictionComponentModule, AgeServiceModule, DetailsComponentModule, DetailsServiceModule, CartListComponentModule, CartServiceModule, UserDetailsComponentModule, UserServiceModule, NewServiceModule, UserDetComponentModule, FilteredProductListComponentModule, NewCategoriesServiceModule, NewFilteredProductListComponentModule, SortedProductListComponentModule, AdvancedEmployeeListComponentModule, AdvancedEmployeeServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
