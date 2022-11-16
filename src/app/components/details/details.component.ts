import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DetailsModel } from '../../models/details.model';
import { DetailsService } from '../../services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent {
  readonly productDetails$: Observable<DetailsModel> = this._activatedRoute.params.pipe(switchMap(data => this._detailsService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _detailsService: DetailsService) {
  }
}
