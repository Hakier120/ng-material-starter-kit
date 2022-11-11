import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CatModel } from '../../models/cat.model';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-cat-fact',
  styleUrls: ['./cat-fact.component.scss'],
  templateUrl: './cat-fact.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatFactComponent {
  readonly catFact$: Observable<CatModel> = this._catService.getOne();

  constructor(private _catService: CatService) {
  }
}
