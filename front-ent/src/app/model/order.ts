export class Order {
  id: number;
  name: string;
  image: string;
  price: number;
  date_create: Date;
  date_update: Date;
  description: string;
  quantity: number;
  sortOptions: any;
  sortOrder: any;
  sortField: any;
  sortKey: any;
  code: string;
  inventoryStatus: string;
  category: string;
  rating: number;


  constructor(id: number, name: string, image: string, price: number, quantity: number, date_create: Date, date_update: Date, description: string, sortOptions: any, sortOrder: any, sortField: any, sortKey: any, code: string, inventoryStatus: string, category: string, rating: number) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.date_create = date_create;
    this.date_update = date_update;
    this.description = description;
    this.sortOptions = sortOptions;
    this.sortOrder = sortOrder;
    this.sortField = sortField;
    this.sortKey = sortKey;
    this.code = code;
    this.inventoryStatus = inventoryStatus;
    this.category = category;
    this.rating = rating;
    this.quantity = quantity;
  }
}
