import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryComponent } from './components/category/category.component';
import { SymbolssComponent } from './components/symbolss/symbolss.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoryComponentModule } from './components/category/category.component-module';
import { SymbolssComponentModule } from './components/symbolss/symbolss.component-module';
import { SymbolsServiceModule } from './services/symbols.service-module';
import { PublicHolidaysComponentModule } from './components/public-holidays/public-holidays.component-module';
import { HolidaysServiceModule } from './services/holidays.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent },
    { path: 'categories', component: CategoryComponent }, { path: 'crypto', component: SymbolssComponent },
    { path: 'public-holidays', component: PublicHolidaysComponent }]), ProductListComponentModule, ProductsServiceModule, CategoryComponentModule,
    SymbolssComponentModule, SymbolsServiceModule, PublicHolidaysComponentModule, HolidaysServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
