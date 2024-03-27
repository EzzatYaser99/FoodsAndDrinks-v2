import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorpageRoutingModule} from './errorpage-routing.module';
import {ErrorpageComponent} from './errorpage.component';
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    ErrorpageComponent
  ],
  imports: [
    CommonModule,
    ErrorpageRoutingModule,
    ButtonModule
  ]
})
export class ErrorpageModule {
}
