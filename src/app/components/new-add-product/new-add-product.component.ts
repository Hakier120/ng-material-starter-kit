import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DetailsService } from '../../services/details.service';
import {DetailsModel} from "../../models/details.model";

@Component({
  selector: 'app-new-add-product',
  templateUrl: './new-add-product.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewAddProductComponent {
  readonly details$: Observable<DetailsModel> = this._activatedRoute.params.pipe(switchMap(data => this._detailsService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _detailsService: DetailsService) {
  }
}
