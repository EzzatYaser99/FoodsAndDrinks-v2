import {Injectable} from '@angular/core';
import {CartOrder} from "../../model/cart-order";
import {BehaviorSubject, Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  orders: CartOrder[] = [];
  existOrder: any;
  totalOrders: Subject<number> = new BehaviorSubject<number>(0);
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);

  // totalOrders:number=0;
  // totalPrice:number=0;

  constructor() {
  }

  addOrderToCart(order: CartOrder) {
    let isExist: boolean = false;
    if (this.orders.length > 0) {
      // for (let temp of this.orders) {
      //   if (temp.id === order.id) {
      //  this.existOrder = temp;
      //     break;
      //   }
      // }
      ////==========//////
      this.existOrder = this.orders.find(item => item.id === order.id);
    }
    isExist = (this.existOrder != undefined); //true
    if (isExist) {
      this.existOrder.quantity++;
    } else {
      this.orders.push(order);
    }
    console.log(this.orders);
    this.calculateTotals();
  }

  calculateTotals() {
    let totalOrderSize: number = 0;
    let totalOrderPrice: number = 0;
    for (let item of this.orders) {
      totalOrderSize += item.quantity;
      totalOrderPrice += item.quantity * item.price;
    }

    this.totalOrders.next(totalOrderSize);
    this.totalPrice.next(totalOrderPrice);
    // console.log("Size = " + this.totalOrders)
    // console.log("Price = " + this.totalPrice)
  }

  removeOrderFromCart(order: CartOrder) {
    order.quantity--;
    if (order.quantity === 0) {
      this.deleteAnOrder(order)
    } else {
      this.calculateTotals()
    }
  }

  deleteAnOrder(order: CartOrder) {
    const index = this.orders.findIndex(temp => temp.id === order.id) // index or -1
    if (index > -1) {
      this.orders.splice(index, 1)
      this.calculateTotals()
    }
  }

}




