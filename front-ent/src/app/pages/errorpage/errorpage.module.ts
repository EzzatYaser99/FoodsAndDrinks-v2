import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorpageRoutingModule} from './errorpage-routing.module';
import {ErrorpageComponent} from './errorpage.component';
import {ButtonModule} from "primeng/button";


@NgModule({
    imports: [
        CommonModule,
        ErrorpageRoutingModule,
        ButtonModule,
        ErrorpageComponent
    ]
})
export class ErrorpageModule {
}
