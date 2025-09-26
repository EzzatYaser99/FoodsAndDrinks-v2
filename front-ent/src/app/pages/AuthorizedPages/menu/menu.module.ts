import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuRoutingModule} from './menu-routing.module';
import {MenuComponent} from './menu.component';
import {ButtonModule} from "primeng/button";
import {DataViewModule} from "primeng/dataview";
import {FormsModule} from "@angular/forms";
import {RatingModule} from "primeng/rating";
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {CarouselModule} from "primeng/carousel";
import {PanelModule} from "primeng/panel";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {CategoryService} from "../../../shared/services/category.service";
import {OrderService} from "../../../shared/services/order.service";
import {SharedModule} from "../../../shared/shared.module";


@NgModule({ exports: [
        MenuComponent
    ], imports: [DataViewModule,
        PanelModule,
        DialogModule,
        InputTextModule,
        ButtonModule,
        RippleModule,
        RatingModule,
        FormsModule, CommonModule, MenuRoutingModule, CarouselModule, SharedModule,
        MenuComponent], providers: [CategoryService, OrderService, provideHttpClient(withInterceptorsFromDi())] })
export class MenuModule {
}
