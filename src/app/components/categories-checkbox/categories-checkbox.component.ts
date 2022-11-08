import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CategoriesService } from '../../services/categories.service';
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-categories-checkbox',
  styleUrls: ['./categories-checkbox.component.scss'],
  templateUrl: './categories-checkbox.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesCheckboxComponent {
  readonly categories$: Observable<ProductModel[]> = this._categoriesService.getAll();
  constructor(private _categoriesService: CategoriesService) {
  }
}
