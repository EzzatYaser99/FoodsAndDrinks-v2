import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {HeaderComponent} from '../../shared/component/header/header.component';
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {CarouselModule} from "primeng/carousel";
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {SharedModule} from "../../shared/shared.module";
import {MenuModule} from "../AuthorizedPages/menu/menu.module";
import {HttpIntercepterBaseAuthService} from "../../shared/services/security/http-intercepter-base-auth.service";

@NgModule({ exports: [
        MainComponent
    ], imports: [CommonModule,
        MainRoutingModule,
        ButtonModule,
        CommonModule,
        InputTextModule,
        CarouselModule,
        SharedModule,
        MenuModule,
        MainComponent], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class MainModule {
}
