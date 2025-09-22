import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { RippleModule } from 'primeng/ripple';
import { MessageModule } from 'primeng/message';
import { CheckboxModule } from 'primeng/checkbox';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { HttpIntercepterBaseAuthService } from './app/shared/services/security/http-intercepter-base-auth.service';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { OrderService } from './app/shared/services/order.service';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, ReactiveFormsModule, SharedModule, ButtonModule, ImageModule, FormsModule, CheckboxModule, MessageModule, RippleModule, SocialLoginModule),
       OrderService, CookieService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBaseAuthService, multi: true },
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
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
