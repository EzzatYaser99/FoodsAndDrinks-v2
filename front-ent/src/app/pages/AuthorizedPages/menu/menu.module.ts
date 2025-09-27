import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuRoutingModule} from './menu-routing.module';
import {MenuComponent} from './menu.component';
import {ButtonModule} from "primeng/button";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {RatingModule} from "primeng/rating";
import {ChipsModule} from "primeng/chips";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CarouselModule} from "primeng/carousel";
import {PanelModule} from "primeng/panel";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {CategoryService} from "../../../shared/services/category.service";
import {OrderService} from "../../../shared/services/order.service";
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
    imports: [
        DataViewModule,
        PanelModule,
        DialogModule,
        DropdownModule,
        InputTextModule,
        ButtonModule,
        RippleModule,
        HttpClientModule,
        RatingModule,
        FormsModule, CommonModule, MenuRoutingModule, CarouselModule, ChipsModule, SharedModule,
        MenuComponent
    ],
    exports: [
        MenuComponent
    ],
    providers: [CategoryService, OrderService]
})
export class MenuModule {
}
