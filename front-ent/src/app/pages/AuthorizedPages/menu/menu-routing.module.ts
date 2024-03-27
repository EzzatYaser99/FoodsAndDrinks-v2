import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from "./menu.component";
import {OrderItemComponent} from "../../../shared/component/order-item/order-item.component";

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'details/:id', component: OrderItemComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {
}
