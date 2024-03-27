import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from "../../../model/order";
import {CartOrder} from "../../../model/cart-order";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-orders-grid',
  templateUrl: './order-item-grid.component.html',
  styleUrls: ['./order-item-grid.component.scss']
})
export class OrderItemGridComponent implements OnInit {

  @Input()
  data: any = {};

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {

  }

  addToCard(data: Order) {
    const cartOrder = new CartOrder(data);
    // console.log(cartOrder);
    this.cartService.addOrderToCart(cartOrder);
    // console.log(this.cartService.addOrderToCart(cartOrder));
  }

}
