import {Component} from '@angular/core';
import {LoginUserInformationService} from "../../shared/services/login-user-information.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.scss']
})
export class ErrorpageComponent {
  constructor(private _router: Router) {
  }

  handelBackPage() {
    this._router.navigate(['main'])
  }
}
