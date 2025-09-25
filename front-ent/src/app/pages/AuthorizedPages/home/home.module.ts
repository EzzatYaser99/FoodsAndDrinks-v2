import {NgModule} from '@angular/core';
// import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
// import {CarouselModule} from "primeng/carousel";
// import {ButtonModule} from "primeng/button";
// import {ToastModule} from "primeng/toast";
import {FormsModule} from "@angular/forms";
import {CategoryService} from "../../../shared/services/category.service";
import {CarouselModule} from "primeng/carousel";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {HomeRoutingModule} from "./home-routing.module";
import {MainRoutingModule} from "../../main/main-routing.module";


@NgModule({ declarations: [

    ],
    bootstrap: [], imports: [
        HomeRoutingModule,
        CarouselModule,
        ButtonModule,
        CarouselModule,
        ButtonModule,
        ToastModule,
        FormsModule,
        CarouselModule,
        MainRoutingModule], providers: [CategoryService] })
export class HomeModule {
}
