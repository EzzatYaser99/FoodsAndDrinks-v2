import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginUserInformationService {
  isUserLogin: boolean = false;
// @ts-ignore
  username:string=sessionStorage.getItem("email");

  constructor() {
    if (sessionStorage.getItem("isUserLogin") == "true") {
      this.isUserLogin = true;
    }
  }

  logMeIn() {
    this.isUserLogin = true;
    sessionStorage.setItem("isUserLogin", "true");
    // @ts-ignore
    this.username=sessionStorage.getItem("email");
  }



}
