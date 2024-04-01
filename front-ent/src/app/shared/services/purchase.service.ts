import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PurchaseRequest} from "../../model/purchase-request";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private baseUrl = 'http://localhost:7070/api/buy/purchase';

  constructor(private http: HttpClient) {
  }

  getOrder(purchaseRequest: PurchaseRequest): Observable<any> {
    return this.http.post<PurchaseRequest>(
      this.baseUrl, purchaseRequest);
  }
}
