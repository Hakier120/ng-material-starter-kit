import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Observable, combineLatest} from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { NewCategoriesService } from '../../services/new-categories.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-filtered-product-list',
  templateUrl: './filtered-product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredProductListComponent {
  readonly categories$: Observable<string[]> = this._newCategoriesService.getAll();
  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this._activatedRoute.params
  ]).pipe(map(([products, params]: [ProductModel[], Params]) => {
    return products.filter((product: ProductModel) => product.category === params['category']);

  }));

  constructor(private _newCategoriesService: NewCategoriesService, private _productsService: ProductsService, private _activatedRoute: ActivatedRoute) {
  }

}
