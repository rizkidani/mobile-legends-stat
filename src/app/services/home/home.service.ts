import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  heroes = new Array<any>();

  constructor(private http: HttpClient) { }

  public getHeroes(): Observable<any> {
    const url = 'https://api.dazelpro.com/mobile-legends/hero';
    return this.http.get<any>(url);
  }

  public getHeroDetail(): Observable<any> {
    const url = 'https://api.dazelpro.com/mobile-legends/hero';
    return this.http.get<any>(url);
  }

  public getHeroByRole(roleName: string): Observable<any> {
    // Cara 1
    // const url = 'https://api.dazelpro.com/mobile-legends/role?roleName=' + roleName;
    // return this.http.get<any>(url);

    // Cara 2
    const url = 'https://api.dazelpro.com/mobile-legends/role';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('roleName', roleName);
    return this.http.get<any>(url, { params: queryParams });
  }

  public postLogin(body: any): Observable<any> {
    // return this.http.post("https://zoo-animal-api.herokuapp.com/animals/rand", body);
    alert(body.value);
    const params = new HttpParams()
      .set('jobseekerEmail', 'manoppo25@gmail.com')
      .set('jobseekerPassword', 'Superadmin123@');

    this.http.get
    return this.http.post("http://54.251.83.205:9091/api/v1/jobseeker/login", params);
  }
}
