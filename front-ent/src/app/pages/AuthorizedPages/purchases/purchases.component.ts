import {Component, OnInit} from '@angular/core';
import {CartOrder} from "../../../model/cart-order";
import {CartService} from "../../../shared/services/cart.service";
import {Router} from "@angular/router";
import { NgIf, NgFor, CurrencyPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-purchases',
    templateUrl: './purchases.component.html',
    styleUrls: ['./purchases.component.scss'],
    standalone: true,
    imports: [ButtonModule, NgIf, NgFor, CurrencyPipe]
})
export class PurchasesComponent implements OnInit {


  orders: CartOrder[] = [];

  orderSize: number = 0;
  orderPrice: number = 0;

  constructor(private cartService: CartService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.getAllOrders();
    this.getCartStatus();
    this.cartService.calculateTotals();
  }

  getCartStatus() {
    this.cartService.totalOrders.subscribe(
      data => {
        this.orderSize = data;
        // console.log(data);
      }
    )

    this.cartService.totalPrice.subscribe(
      data => {
        this.orderPrice = data;
        // console.log(data);
      }
    )
  }

  getAllOrders() {
    this.orders = this.cartService.orders
  }

  increamentOrders(item: CartOrder) {
    this.cartService.addOrderToCart(item);
  }

  decreamentOrders(item: CartOrder) {
    this.cartService.removeOrderFromCart(item);
  }

  removeOrders(item: CartOrder) {
    this.cartService.deleteAnOrder(item);
  }


  goToCheckOut() {
    this._router.navigate(['main/pages/checkout'])
  }
}
