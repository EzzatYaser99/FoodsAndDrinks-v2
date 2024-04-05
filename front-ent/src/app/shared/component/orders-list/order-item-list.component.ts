import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../../model/order";
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-orders-list',
    templateUrl: './order-item-list.component.html',
    styleUrls: ['./order-item-list.component.scss'],
    standalone: true,
    imports: [RouterLink, RatingModule, ReactiveFormsModule, FormsModule, ButtonModule]
})
export class OrderItemListComponent implements OnInit {

  @Input()
  data: any

  ngOnInit(): void {

  }


}
