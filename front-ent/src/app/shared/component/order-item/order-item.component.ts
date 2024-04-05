import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../../services/order.service";
import {Order} from "../../../model/order";
import {CartOrder} from "../../../model/cart-order";
import {CartService} from "../../services/cart.service";
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ImageModule } from 'primeng/image';

@Component({
    selector: 'app-order-item',
    templateUrl: './order-item.component.html',
    styleUrls: ['./order-item.component.scss'],
    standalone: true,
    imports: [ImageModule, RatingModule, ReactiveFormsModule, FormsModule, ButtonModule]
})
export class OrderItemComponent implements OnInit {
  // @ts-ignore
  order: any = {};

  constructor(private orderService: OrderService,
              private route: ActivatedRoute,
              private router: Router,
              private cartService: CartService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    let id = this.route
      .snapshot
      .paramMap
      .get('id');
    this.orderService.getOrderById(id).subscribe(
      data => {
        this.order = data;
        console.log(data);
      }
    )
  }

  addToCart(order: any) {

    const cartOrder = new CartOrder(order);
    // console.log(cartOrder);
    this.cartService.addOrderToCart(cartOrder);

  }

  handelBackPage() {
    this._router.navigate(['main/pages/menu'])
  }
}
