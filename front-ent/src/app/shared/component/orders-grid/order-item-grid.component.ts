import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from "../../../model/order";
import {CartOrder} from "../../../model/cart-order";
import {CartService} from "../../services/cart.service";
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ImageModule } from 'primeng/image';

@Component({
    selector: 'app-orders-grid',
    templateUrl: './order-item-grid.component.html',
    styleUrls: ['./order-item-grid.component.scss'],
    standalone: true,
    imports: [ImageModule, RatingModule, ReactiveFormsModule, FormsModule, ButtonModule, RouterLink]
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
