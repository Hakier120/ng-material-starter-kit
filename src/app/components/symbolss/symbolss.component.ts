import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { SymbolsModel } from '../../models/symbols.model';
import { SymbolsService } from '../../services/symbols.service';

@Component({
  selector: 'app-symbolss',
  styleUrls: ['./symbolss.component.scss'],
  templateUrl: './symbolss.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SymbolssComponent {
  readonly symbols$: Observable<SymbolsModel[]> = this._symbolsService.getAll();

  constructor(private _symbolsService: SymbolsService) {
  }
}
