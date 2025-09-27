import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
// import {CarouselModule} from "primeng/carousel";
// import {ButtonModule} from "primeng/button";
// import {ToastModule} from "primeng/toast";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CategoryService} from "../../../shared/services/category.service";
import {CarouselModule} from "primeng/carousel";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {HomeRoutingModule} from "./home-routing.module";
import {MainRoutingModule} from "../../main/main-routing.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    ButtonModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    MainRoutingModule
  ],
  providers: [CategoryService],
  bootstrap: [HomeComponent],
})
export class HomeModule {
}
