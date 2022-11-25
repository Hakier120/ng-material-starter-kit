import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-new-product-list',
  templateUrl: './new-product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProductListComponent {
  readonly productList$: Observable<ProductModel[]> = this._productsService.getAll();

  constructor(private _productsService: ProductsService) {
  }
}
