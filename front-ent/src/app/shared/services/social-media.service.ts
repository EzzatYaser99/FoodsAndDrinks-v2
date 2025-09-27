import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  private baseUrl = 'http://localhost:7070/social/';

  constructor(private http: HttpClient,
              private _cook: CookieService) {
  }



  loginWithFacebook(token:any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'facebook', {token}).pipe(
      map(
        response => {
          sessionStorage.setItem('email', response.email);
           sessionStorage.setItem('token', 'Bearer ' + response.token);
          this._cook.set('email', response.email);
          this._cook.set('token', 'Bearer ' + response.token);
          return response;
        }
      )
    );
  }
}
