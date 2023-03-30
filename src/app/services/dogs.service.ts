import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { DogModel } from '../models/dog.model';

@Injectable()
export class DogsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<DogModel[]> {
    return this._httpClient.get<DogModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/dogs');
  }

  delete(id: string): Observable<DogModel> {
    return this._httpClient.delete<DogModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/dogs/'+id);
  }
}
