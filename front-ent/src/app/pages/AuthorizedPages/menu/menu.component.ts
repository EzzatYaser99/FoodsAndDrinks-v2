import {Component, Input} from '@angular/core';
import {SharedModule } from "primeng/api";
import {CategoryService} from "../../../shared/services/category.service";
import {Category} from "../../../model/category";
import {Order} from "../../../model/order";
import {OrderService} from "../../../shared/services/order.service";
import {ActivatedRoute} from "@angular/router";
import { OrderItemGridComponent } from '../../../shared/component/orders-grid/order-item-grid.component';
import { OrderItemListComponent } from '../../../shared/component/orders-list/order-item-list.component';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { SpinnerComponent } from '../../../shared/component/spinner/spinner.component';
import {CommonModule} from "@angular/common";
import {CascadeSelect} from "primeng/cascadeselect";



@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    standalone: true,
  imports: [CommonModule, SpinnerComponent, DataViewModule, SharedModule, ReactiveFormsModule, FormsModule, InputTextModule, OrderItemListComponent, OrderItemGridComponent, CascadeSelect]
})
export class MenuComponent {
  sortSalaryOptions: any;
  CategoryOptions: any;
  sortOrder: any;
  sortField: any;
  sortKey: any;
  categories: Category[] = [];
  orders: Order[] = [];
  item: any[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];

  constructor(
    private categoryService: CategoryService,
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {
  }

  capitalizeFirstLetter(word: String) {
    const newWord = word.split(" ");
    for (var i = 0; i < newWord.length; i++) {
      newWord[i] = newWord[i].charAt(0).toUpperCase() + newWord[i].slice(1);
    }
    return newWord;
  }

  ngOnInit() {

    this.getCategories();
    this.getOrders();


    this.sortSalaryOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];

    this.CategoryOptions = [
      {label: 'All', keyValue: 'All'},
      {label: 'Foods', keyValue: 'Foods'},
      {label: 'Cold Drinks', keyValue: 'Cold Drinks'},
      {label: 'Hot Drinks', keyValue: 'Hot Drinks'},
      {label: 'Sweets', keyValue: 'Sweets'},
      {label: 'Extras', keyValue: 'Extras'},
    ];

  }

  onSortChange(event: any) {
    let value = event.value;
    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  getCategories() {
    this.loading = true;
    this.categoryService.getAllCategories().subscribe(
      data => {
        this.categories = data;
        this.loading = false;
      }, error => {
        this.loading = false;
        alert("Error");
      }
    )
  }

  getOrders() {
    this.loading = true;
    this.orderService.getAllOrders().subscribe(data => {
        this.orders = data;
        // console.log(this.orders);
        this.loading = false;
      }, error => {
        this.loading = false;
        alert("Error")

      }
    )
  }

  filterCategory($event: any) {
    let Category = $event.value;
    (Category.keyValue == 'All') ? this.getOrders() : this.getOrdersByfilteredCategory(Category.keyValue)
  }

  getOrdersByfilteredCategory(key: String) {
    this.loading = true;
    this.orderService.getOrdersByCategoryName(key).subscribe(response => {
      this.loading = false;
      this.orders = response;
    })
  }

  doSearch(value: string) {
    const newWord = value.split(" ");
    for (var i = 0; i < newWord.length; i++) {
      newWord[i] = newWord[i].charAt(0).toUpperCase() + newWord[i].slice(1);
    }
    const key = newWord.join(" ");
    // console.log(key);
    this.orderService.getOrderBykey(key).subscribe(
      data => {
        this.orders = data;
      }
    )
  }


  // getOrderById(id: any) {
  //   this.loading = true;
  //   this.orderService.getOrderById(id).subscribe(response => {
  //     this.loading = false;
  //     this.item = response;
  //   })
  // }


}






