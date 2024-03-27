import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Subject} from "rxjs";


@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.scss']
})
export class CartStatusComponent implements OnInit {


  orderSize: number = 0;
  orderPrice: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.getCartStatus();
    // console.log(this.orderSize);
    // console.log(this.orderPrice );

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

//     console.log(this.orderSize );
//     console.log(this.orderPrice );
//     this.orderSize=this.cartService.totalOrders
// this.orderPrice=this.cartService.totalPrice


}
