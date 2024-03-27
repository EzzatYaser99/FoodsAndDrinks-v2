import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SignupRoutingModule} from './signup-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationService} from "../../shared/services/security/authentication.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SignupRoutingModule,
    HttpClientModule
  ],
  providers: [AuthenticationService]
})
export class SignupModule {
}
