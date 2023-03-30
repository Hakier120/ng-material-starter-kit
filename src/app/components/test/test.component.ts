import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent {
  readonly productList$: Observable<ProductModel[]> = this._testService.getAll();

  constructor(private _testService: TestService) {
  }
}
