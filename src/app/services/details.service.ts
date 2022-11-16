import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetailsModel } from '../models/details.model';

@Injectable()
export class DetailsService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: number): Observable<DetailsModel> {
    return this._httpClient.get<DetailsModel>(`https://fakestoreapi.com/products/${id}`);
  }
}
