import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  getHeroes(): Observable<any> {
    return of('Nana', 'Gusion', 'Esmeralda');
  }

  getHeroesV2(): Observable<any> {
    return new Observable((heroes) => {

      setTimeout(() => {
        heroes.next('Gusion');
      }, 3000);

      heroes.complete();
      // heroes.error('message error');

      setTimeout(() => {
        heroes.next('Nana');
      }, 6000);
    });
  }
}
