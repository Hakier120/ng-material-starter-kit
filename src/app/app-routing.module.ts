import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryComponent } from './components/category/category.component';
import { SymbolssComponent } from './components/symbolss/symbolss.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoryComponentModule } from './components/category/category.component-module';
import { SymbolssComponentModule } from './components/symbolss/symbolss.component-module';
import {SymbolsServiceModule} from "./services/symbols.service-module";

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategoryComponent }, { path: 'crypto', component: SymbolssComponent }]), ProductListComponentModule, ProductsServiceModule, CategoryComponentModule, SymbolssComponentModule, SymbolsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
