import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBaseAuthService implements HttpInterceptor{

  constructor(private authService: AuthenticationService) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (this.authService.getAuthentication() && this.authService.getToken()) {

        req = req.clone({
        setHeaders: {
          // @ts-ignore
          Authorization: (this.authService.getToken())
        }
      });
    }
    return next.handle(req);
  }

}
