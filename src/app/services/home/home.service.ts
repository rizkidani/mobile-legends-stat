import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  private urlUsers = 'https://reqres.in/api/users?page=1';

  getUsers(): Observable<any> {
    return this.http.get<any>(this.urlUsers);
  }
}
