import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Order} from '../../model/order';
import {map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:9090/api/';

  constructor(private http: HttpClient) {
  }


  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + 'getAllOrders').pipe(
      map(
        response => response
      )
    )
  }

  getOrdersByCategoryName(Keyword: String): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + 'category?key=' + Keyword).pipe(
      map(
        response => response
      )
    )
  }

///orderkey?word=Ch
  getOrderBykey(word: String) {
    return this.http.get<Order[]>(this.baseUrl + 'orderkey?word=' + word).pipe(
      map(
        response => response
      )
    )
  }

  getOrderById(id: string | null): Observable<Order> {
    return this.http.get<Order>(this.baseUrl + 'order?id=' + id).pipe(
      map(response => response)
    )
  }
}
