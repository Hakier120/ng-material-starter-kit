import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NewModel } from '../../models/new.model';
import { NewService } from '../../services/new.service';

@Component({
  selector: 'app-user-det',
  templateUrl: './user-det.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetComponent {
  readonly userDetail$: Observable<NewModel> = this._activatedRoute.params.pipe(switchMap(data => this._newService.getOne(data['name'])));

  constructor(private _activatedRoute: ActivatedRoute, private _newService: NewService) {
  }
}
