import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {combineLatest, filter, map, Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ProductModel} from '../../models/product.model';
import {TestService} from '../../services/test.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
  readonly productDetails$: Observable<ProductModel> = this._activatedRoute.params.pipe(switchMap(data => this._testService.getOne(data['id'])));
  readonly similarProducts$: Observable<ProductModel[]> = combineLatest([
    this._testService.getAll(),
    this.productDetails$
  ]).pipe(map(([productList, details]) => productList.filter((product) => product.category === details.category)))


  constructor(private _testService: TestService, private _activatedRoute: ActivatedRoute) {
  }
}
