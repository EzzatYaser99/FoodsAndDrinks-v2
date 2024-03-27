import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderItemComponent} from "./shared/component/order-item/order-item.component";
import {CanActivatedPagesGuard} from "./shared/guard/can-activated-pages.guard";
import {LoginActivatedGuard} from "./shared/guard/login-activated.guard";
import {SignupComponent} from "./pages/signup/signup.component";

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
    // ,canActivate:[LoginActivatedGuard]
  },

  {path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule)
    // ,canActivate:[LoginActivatedGuard]
  },

  {path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
    // , canActivate: [CanActivatedPagesGuard]
  },

  {path: '**', redirectTo: 'login'},
  // {path: '', pathMatch: "full", redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
