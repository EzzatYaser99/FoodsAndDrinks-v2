import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login.component";

import {ResetPasswordComponent} from "../reset-password/reset-password.component";

const routes: Routes = [


  {path: 'reset', component: ResetPasswordComponent},
  {path: '**', component: LoginComponent},
  {path: '', pathMatch: "full", component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
