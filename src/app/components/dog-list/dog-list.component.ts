import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable, of, Subject} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DogModel } from '../../models/dog.model';
import { DogsService } from '../../services/dogs.service';
import { SameCityDogsService } from '../../services/same-city-dogs.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DogListComponent {
  readonly dogList$: Observable<DogModel[]> = this._dogsService.getAll();

  private _dogDetailsSubject: Subject<DogModel> = new Subject<DogModel>();
  public dogDetails$: Observable<DogModel> = this._dogDetailsSubject.asObservable();

  private _deleteDogSubject: Subject<string> = new Subject<string>();
  public deleteDog$: Observable<string> = this._deleteDogSubject.asObservable();

  private _refreshListSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refreshList$: Observable<void> = this._refreshListSubject.asObservable();

  private _sameDogSubject: Subject<DogModel | undefined> = new Subject<DogModel | undefined>();
  public sameDog$: Observable<DogModel | undefined> = this._sameDogSubject.asObservable();

  public isVisible=false

  readonly similarDog$: Observable<DogModel[]> = combineLatest([
    this._dogDetailsSubject.asObservable(),
    this._sameCityDogsService.getAll()
  ]).pipe(
    map(([subject, dogs]) => dogs.filter((dog) => dog.breed === subject.breed))
  )

  readonly refreshedDogList$: Observable<DogModel[]> = this.refreshList$.pipe(
    switchMap(data => this._dogsService.getAll()
    ));


  constructor(private _dogsService: DogsService, private _sameCityDogsService: SameCityDogsService) {
  }

  selectDog(dog: DogModel): void {
    this._dogDetailsSubject.next(dog)
    this.isVisible=true
  }

  delete(id: string): void {
    this._dogsService.delete(id).subscribe(() => this._refreshListSubject.next());
    this.isVisible=false
  }
  close(){
    this.isVisible=false
  }

}
