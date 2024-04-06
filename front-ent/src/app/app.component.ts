import {Component, OnInit} from '@angular/core';
import {LoginUserInformationService} from "./shared/services/login-user-information.service";
import {FooterInfo} from "./shared/component/footer/FooterInfo";
import {PrimeNGConfig} from "primeng/api";
import { NavigationStart, Router, RouterOutlet } from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import { FooterComponent } from './shared/component/footer/footer.component';
import { ScrolltopComponent } from './shared/component/scrolltop/scrolltop.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, ScrolltopComponent, FooterComponent]
})
export class AppComponent implements OnInit{
  title = 'Restaurant Chef';

  constructor(
    public _loginInfo: LoginUserInformationService,
    private primengConfig: PrimeNGConfig,
    private _router: Router,
    private _cook:CookieService
  ) {
    this.primengConfig.ripple = false;

  }

  ngOnInit(): void { if (this.isCookie()) {
  sessionStorage.setItem('email', this._cook.get('email'));
  sessionStorage.setItem('token', this._cook.get('token'));
}
}

isCookie() {
  if (this._cook.get('email') === '' || this._cook.get('token') === '') {
    return false;
  }
  return true;
}


}
