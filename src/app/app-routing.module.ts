import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DogListComponent } from './components/dog-list/dog-list.component';
import { TestComponent } from './components/test/test.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { DogListComponentModule } from './components/dog-list/dog-list.component-module';
import { TestComponentModule } from './components/test/test.component-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'dogs', component: DogListComponent }, { path: 'products', component: TestComponent }, { path: 'products/:id', component: ProductDetailsComponent }]), DogListComponentModule, TestComponentModule, ProductDetailsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
