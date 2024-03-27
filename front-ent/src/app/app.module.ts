import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PrimeNGConfig} from "primeng/api";
import {SharedModule} from "./shared/shared.module";
import {OrderService} from "./shared/services/order.service";
import {PurchasesComponent} from './pages/AuthorizedPages/purchases/purchases.component';
import {ButtonModule} from "primeng/button";
import {ImageModule} from "primeng/image";
import {CheckOutComponent} from './pages/AuthorizedPages/check-out/check-out.component';
import {ChipsModule} from "primeng/chips";
import {DropdownModule} from "primeng/dropdown";
import {CheckboxModule} from "primeng/checkbox";
import {MessageModule} from "primeng/message";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SignupComponent} from './pages/signup/signup.component';
import {RippleModule} from "primeng/ripple";
import {HttpIntercepterBaseAuthService} from "./shared/services/security/http-intercepter-base-auth.service";
import {CookieService} from "ngx-cookie-service";
import { ActivationCodeComponent } from './pages/activation-code/activation-code.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import {
  FacebookLoginProvider,
   SocialAuthServiceConfig,
  SocialLoginModule
} from "@abacritt/angularx-social-login";



@NgModule({
  declarations: [
    AppComponent,
    PurchasesComponent,
    CheckOutComponent,
    SignupComponent,
    ActivationCodeComponent,
    ResetPasswordComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    ButtonModule,
    ImageModule, ChipsModule,
    DropdownModule,
    FormsModule,
    CheckboxModule,
    MessageModule,
    RippleModule,
    HttpClientModule,
    SocialLoginModule

  ],
  providers: [PrimeNGConfig, OrderService,CookieService
    , {provide:HTTP_INTERCEPTORS, useClass :HttpIntercepterBaseAuthService ,multi : true },

    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('903014054091443')
          }
        ]
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
