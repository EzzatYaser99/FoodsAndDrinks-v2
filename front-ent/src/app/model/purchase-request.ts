import {User} from "./user";
import {Address} from "./address";
import {RequestOrder} from "./request-order";
import {Item} from "./item";

export class PurchaseRequest {

  client: User;
  fromAddress: Address;
  toAddress: Address;
  requestOrder: RequestOrder;
  items: Item[];


  constructor(client: User, fromAddress: Address, toAddress: Address, requestOrder: RequestOrder, items: Item[]) {
    this.client = client;
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.requestOrder = requestOrder;
    this.items = items;
  }
}
