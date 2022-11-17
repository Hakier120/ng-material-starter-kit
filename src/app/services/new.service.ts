import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewModel } from '../models/new.model';

@Injectable()
export class NewService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(name: string): Observable<NewModel> {
    return this._httpClient.get<NewModel>(`https://api.genderize.io/?name=${name}`);
  }
}
