import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main.component";
import {OrderItemComponent} from "../../shared/component/order-item/order-item.component";
import {PurchasesComponent} from "../AuthorizedPages/purchases/purchases.component";
import {CanActivatedPagesGuard} from "../../shared/guard/can-activated-pages.guard";
import {HomeComponent} from "../AuthorizedPages/home/home.component";

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {
    path: 'pages', component: MainComponent, children: [
      {
        path: 'home', loadChildren: () => import('../AuthorizedPages/home/home.module')
          .then(m => m.HomeModule)
      },
      {
        path: 'menu', loadChildren: () => import('../AuthorizedPages/menu/menu.module')
          .then(m => m.MenuModule),
      },
      {
        path: 'about', loadChildren: () => import('../AuthorizedPages/about/about.module')
          .then(m => m.AboutModule)
      },
      {
        path: 'purchases', loadChildren: () => import('../AuthorizedPages/purchases/purchases.module')
          .then(m => m.PurchasesModule)
      },
      {
        path: 'checkout', loadChildren: () => import('../AuthorizedPages/check-out/check-out.module')
          .then(m => m.CheckOutModule)
      },
      {path: '', pathMatch: "full", redirectTo: 'home'},


    ]
  },
  {path: 'error', loadChildren: () => import('../errorpage/errorpage.module').then(m => m.ErrorpageModule)},
  {path: '**', redirectTo: 'error'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
