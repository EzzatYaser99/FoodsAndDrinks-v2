import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CookieService} from "ngx-cookie-service"
import {User} from "../../../model/user";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:7070/api/';

  constructor(private http: HttpClient, private _cook: CookieService) {}

  executeAuthentication(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'signin', {email, password}).pipe(
      map(
        response => {
          sessionStorage.setItem('email', response.email);
          sessionStorage.setItem('token', 'Bearer ' + response.token);
          // this._cook.set('email', response.email);
          // this._cook.set('token', 'Bearer ' + response.token);
          return response;
          // alert(response)
          // console.log(response);
        }
      )
    )
  }

  createUser(user?: User, httpOptions?: { headers: HttpHeaders }): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'signup', user,httpOptions).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  activeAccount(email: string, code: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'activated', {email, code}).pipe(
      map(
        response => {
          return response;


        }
      )
    )
  }

  getUserActive(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'active', {email, password}).pipe(
      map(
        response => {
          return response;

        }
      )
    )
  }

  checkEmail(email: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'checkEmail', {email}).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  resetPassword(email: string, code: string, password: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'resetPassword', {email, code, password}).pipe(
      map(
        response => {
          return response;

        }
      )
    )
  }

  getAuthentication() {
    return sessionStorage.getItem('email');
  }

  // @ts-ignore
  getToken() {
    if (this.getAuthentication()) {
      return sessionStorage.getItem('token');
    }
  }
  isLogin() {
    return (sessionStorage.getItem('email') !== null ||
      sessionStorage.getItem('token') !== null);
  }

  logOut() {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
    sessionStorage.setItem('isUserLogin','false');
    this._cook.delete('email');
    this._cook.delete('token');
  }



}
