import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../../model/order";

@Component({
  selector: 'app-orders-list',
  templateUrl: './order-item-list.component.html',
  styleUrls: ['./order-item-list.component.scss']
})
export class OrderItemListComponent implements OnInit {

  @Input()
  data: any

  ngOnInit(): void {

  }


}
