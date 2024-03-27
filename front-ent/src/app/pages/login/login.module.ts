import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {CheckboxModule} from "primeng/checkbox";
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthenticationService} from "../../shared/services/security/authentication.service";
import {HttpIntercepterBaseAuthService} from "../../shared/services/security/http-intercepter-base-auth.service";
import {GoogleSigninButtonModule, SocialAuthService} from "@abacritt/angularx-social-login";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CheckboxModule,
    ChipsModule,
    ButtonModule,
    RippleModule,
    ReactiveFormsModule,
    HttpClientModule,
    // GoogleSigninButtonModule,

  ],
  providers: [AuthenticationService,SocialAuthService
    , {provide:HTTP_INTERCEPTORS, useClass :HttpIntercepterBaseAuthService ,multi : true }

  ],
})
export class LoginModule {
}
