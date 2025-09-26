import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SignupRoutingModule} from './signup-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {AuthenticationService} from "../../shared/services/security/authentication.service";


@NgModule({ declarations: [], imports: [CommonModule,
        SignupRoutingModule], providers: [AuthenticationService, provideHttpClient(withInterceptorsFromDi())] })
export class SignupModule {
}
