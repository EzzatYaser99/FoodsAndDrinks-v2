import {Component, OnInit} from '@angular/core';
import {LoginUserInformationService} from "./shared/services/login-user-information.service";
import {FooterInfo} from "./shared/component/footer/FooterInfo";
import {PrimeNGConfig} from "primeng/api";
import {NavigationStart, Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'New Restaurant';
  socialMediaInformation: Array<FooterInfo> = [
    {
      socialMediaIcon: ' pi pi-facebook',
      contactDetailsHerf: 'https://www.facebook.com/ntgclaritynetworks',
      title: 'facebook'
    },
    {
      socialMediaIcon: 'pi pi-google',
      contactDetailsHerf: 'https://ntgclarity.com/',
      title: 'google'
    },
    {
      socialMediaIcon: 'pi pi-linkedin',
      contactDetailsHerf: 'https://www.linkedin.com/company/ntg-clarity/mycompany/verification/',
      title: 'linkedin'
    },
    {
      socialMediaIcon: 'pi pi-twitter',
      contactDetailsHerf: 'https://twitter.com/NTGClarityStage',
      title: 'twitter'
    },
    {
      socialMediaIcon: 'pi pi-instagram',
      contactDetailsHerf: 'https://www.instagram.com/explore/locations/1017721966/ntg-clarity-networks-inc/',
      title: 'instagram'
    }
  ];

  openDaysInformation: Array<FooterInfo> = [
    {openDays: 'Everyday'},
    {openDays: '10.00 Am -10.00 Pm'},
  ];
  contactDetailsInformation: Array<FooterInfo> = [
    {contactDetailsIcon: 'pi pi-map-marker', contactDetailsCommand: 'location ', contactDetailsHerf: '#'},
    {contactDetailsIcon: 'pi pi-phone', contactDetailsCommand: '01092190082', contactDetailsHerf: '#'},
    {
      contactDetailsIcon: 'pi pi-globe',
      contactDetailsCommand: 'https://ntgclarity.com/ ',
      contactDetailsHerf: 'https://ntgclarity.com/'
    },
    {
      contactDetailsIcon: 'pi pi-inbox',
      contactDetailsCommand: 'ntgapps@ntgclarity.com',
      contactDetailsHerf: 'https://accounts.google.com/v3/signin/identifier?dsh=S-569605920%3A1679139941662845&authuser=0&continue=https%3A%2F%2Fmail.google.com&ec=GAlAFw&hl=ar&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession'
    },
  ];

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
