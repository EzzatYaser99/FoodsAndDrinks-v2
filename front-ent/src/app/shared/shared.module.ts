import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "./component/footer/footer.component";
import {ScrolltopComponent} from "./component/scrolltop/scrolltop.component";
import {SpinnerComponent} from "./component/spinner/spinner.component";
import {HeaderComponent} from "./component/header/header.component";
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {OrderItemGridComponent} from './component/orders-grid/order-item-grid.component';
import {OrderItemListComponent} from "./component/orders-list/order-item-list.component";
import {OrderItemComponent} from './component/order-item/order-item.component';
import {CategoryService} from "./services/category.service";
import {OrderService} from "./services/order.service";
import {CartStatusComponent} from './component/cart-status/cart-status.component';
import {BadgeModule} from "primeng/badge";
import {ImageModule} from "primeng/image";
import {AnimateModule} from "primeng/animate";
import {CartService} from "./services/cart.service";
import {StateCountryService} from "./services/state-country.service";
import {PurchaseService} from "./services/purchase.service";
import {AuthenticationService} from "./services/security/authentication.service";



@NgModule({
    imports: [
        CommonModule,
        MenubarModule,
        ButtonModule,
        RatingModule,
        FormsModule,
        BadgeModule,
        ImageModule,
        AnimateModule,
        SpinnerComponent,
        ScrolltopComponent,
        FooterComponent,
        HeaderComponent,
        OrderItemGridComponent,
        OrderItemListComponent,
        OrderItemComponent,
        CartStatusComponent,
    ], exports: [
        HeaderComponent,
        SpinnerComponent,
        ScrolltopComponent,
        FooterComponent,
        OrderItemGridComponent,
        OrderItemListComponent,
        OrderItemComponent,
        // CartStatusComponent
    ], providers: [CategoryService, OrderService, StateCountryService, PurchaseService]
})
export class SharedModule {
}
