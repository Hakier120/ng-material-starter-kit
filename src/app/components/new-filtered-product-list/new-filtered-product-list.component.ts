import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { NewCategoriesService } from '../../services/new-categories.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-new-filtered-product-list',
  templateUrl: './new-filtered-product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewFilteredProductListComponent {
  readonly categories$: Observable<string[]> = this._newCategoriesService.getAll();
  private _categorySubject: Subject<string> = new Subject<string>();
  public category$: Observable<string> = this._categorySubject.asObservable();
  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.category$
  ]).pipe(
    map(([products, category]: [ProductModel[], string]) => {
      return products.filter(product => product.category === category);
    }
    ))



  constructor(private _newCategoriesService: NewCategoriesService, private _productsService: ProductsService) {
  }

  selectCategory(category: string): void {
    this._categorySubject.next(category);
  }
}
