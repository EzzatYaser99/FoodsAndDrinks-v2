import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {SignupComponent} from "./signup.component";
import {MainComponent} from "../main/main.component";
import {ActivationCodeComponent} from "../activation-code/activation-code.component";
import {LoginActivatedGuard} from "../../shared/guard/login-activated.guard";
import {AccountActiveService} from "../../shared/guard/accountActive.service";
import {ResetPasswordComponent} from "../reset-password/reset-password.component";

const routes: Routes = [
  {path: 'active', component: ActivationCodeComponent,canActivate : [AccountActiveService]},
  {path: '', pathMatch: "full", component: SignupComponent},
  // {path: 'reset', component: ResetPasswordComponent},
  {path: '**', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule {
}
