import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SymbolsModel } from '../models/symbols.model';

@Injectable()
export class SymbolsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<SymbolsModel[]> {
    return this._httpClient.get<SymbolsModel[]>('https://api2.binance.com/api/v3/ticker/24hr');
  }
}
