import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public postLogin(body: any): Observable<any> {
    const params = new HttpParams()
      .set('jobseekerEmail', body.jobseekerEmail)
      .set('jobseekerPassword', body.jobseekerPassword);
    return this.http.post("http://54.251.83.205:9091/api/v1/jobseeker/login", params);
  }
}
