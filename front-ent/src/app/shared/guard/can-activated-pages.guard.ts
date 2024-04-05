import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../services/security/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class CanActivatedPagesGuard  {

  constructor( private  authService:AuthenticationService, private  _router:Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.isLogin()) {
      return true;
    }
    this._router.navigate(['login']);
    return false;
  }


}
