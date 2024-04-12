import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import {StateCountryService} from "../../../shared/services/state-country.service";
import {Country} from "../../../model/country";
import {State} from "../../../model/state";
import {allowMangle} from "@angular-devkit/build-angular/src/utils/environment-options";
import {SpaceValidator} from "../../../model/space-validator";
import {CartService} from "../../../shared/services/cart.service";
import {Address} from "../../../model/address";
import {RequestOrder} from "../../../model/request-order";
import {Item} from "../../../model/item";
import {PurchaseRequest} from "../../../model/purchase-request";
import {PurchaseService} from "../../../shared/services/purchase.service";
import {User} from "../../../model/user";
import {Router} from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { NgIf, CurrencyPipe } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-check-out',
    templateUrl: './check-out.component.html',
    styleUrls: ['./check-out.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, InputTextModule, NgIf, DropdownModule, SharedModule, ButtonModule, CurrencyPipe]
})
export class CheckOutComponent implements OnInit {
  selectedFromCountry: any;
  selectedToCountry: any;
  selectedFromState: any;
  selectedToState: any;
  selectedCreditCard: any;

  checkoutParentGroup!: FormGroup;
  // checkoutParentGroup: any;
  CreditCard: any[];
  countries: Country[] = [];
  FromStates: State[] = [];
  ToStates: State[] = [];
  totalOrderSize: number = 0;
  totalOrderPrice: number = 0;
  checked: boolean = true;

  constructor(private _formBuilder: FormBuilder,
              private stateCountry: StateCountryService,
              private cartService: CartService,
              private purchaseService: PurchaseService,
              private _router: Router
  ) {

    this.CreditCard = [
      {name: 'Visa'},
      {name: 'Card'},

    ];

  }

  ngOnInit(): void {
    this.myForm();
    this.getAllCountries();
    this.getTotals();
    // this.getAllStates();
    // this.getStatesByCountryCode("GE");

  }

  myForm() {

    this.checkoutParentGroup = this._formBuilder.group({

        FullName: ['Ezzat Yaser', [
          Validators.required,
          SpaceValidator.onlyContainSpace,
          Validators.minLength(6),
          Validators.maxLength(18),

        ]],
        Email: ['azzat.yaser12@gmail.com', [
          Validators.required,
          SpaceValidator.onlyContainSpace,
          Validators.maxLength(25),
          Validators.email,
          Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
        ]],
        Phone: ['01092190082', [
          Validators.required,
          SpaceValidator.onlyContainSpace,
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.pattern('^[0-9]*$')
        ]],

        From: this._formBuilder.group({
          Country: [''],
          State: [''],
          ZipCode: ['200'],
        }),
        To: this._formBuilder.group({
          Country: [''],
          State: [''],
          ZipCode: [''],
        }),

        CreditCard: this._formBuilder.group({
          CardType: [''],
          CardNumber: ['200'],
          Code: ['200'],
        })
      }
    );
  }

  done() {
    if (this.checkoutParentGroup.invalid) {
      this.checkoutParentGroup.markAllAsTouched();
    } else {
      /* #1 */
      // @ts-ignore
      let client: User = new User();
      client.name = this.checkoutParentGroup.controls['FullName'].value;
      client.email = this.checkoutParentGroup.controls['Email'].value;
      client.mobilePhone = this.checkoutParentGroup.controls['Phone'].value;

      /* #2 */
      // @ts-ignore
      let fromAddress: Address = new Address()
      fromAddress.country = this.checkoutParentGroup.controls['From'].value.Country.name;
      fromAddress.state = this.checkoutParentGroup.controls['From'].value.State.name;
      fromAddress.zipCode = this.checkoutParentGroup.controls['From'].value.ZipCode;

      /* #3 */
      // @ts-ignore
      let toAddress: Address = new Address()
      toAddress.country = this.checkoutParentGroup.controls['To'].value.Country.name;
      toAddress.state = this.checkoutParentGroup.controls['To'].value.State.name;
      toAddress.zipCode = this.checkoutParentGroup.controls['To'].value.ZipCode;

      /* #4 */
      // @ts-ignore
      let requestOrder = new RequestOrder();
      requestOrder.totalPrice = this.totalOrderPrice;
      requestOrder.totalQuantity = this.totalOrderSize;
      /* #5 */

      let orders = this.cartService.orders;
      let items: Item[] = orders.map(data => new Item(data));

      // @ts-ignore
      let purchaseRequest = new PurchaseRequest();
      purchaseRequest.client = client;
      purchaseRequest.fromAddress = fromAddress;
      purchaseRequest.toAddress = toAddress;
      purchaseRequest.requestOrder = requestOrder;
      purchaseRequest.items = items;

      this.purchaseService.getOrder(purchaseRequest).subscribe({
        next: response => {
          alert("ok")
          alert("Your Name : " + response.name);
          alert("Your Code : " + response.code);
          this.clean();
        },
        error: error => {
          console.log("Error is : " + error.message);
        }
      })
    }
  }

  similarGroup(event: Event) {
    if ((<HTMLInputElement>event.target).checked) {
      this.checkoutParentGroup.controls['To'].setValue(this.checkoutParentGroup.controls['From'].value);
      this.ToStates = this.FromStates;
    } else {
      this.checkoutParentGroup.controls['To'].reset();
    }
  }

  getAllCountries() {
    this.stateCountry.getAllCountries().subscribe(data => {
      this.countries = data;
    })
  }

// getAllStates(){
//   this.stateCountry.getAllStates().subscribe(data=>{
//     this.FromStates=data;
//     this.ToStates=data;
//   })
// }


  filterStates($event: any) {
    if (this.selectedFromCountry) {
      let countryCode = this.selectedFromCountry.code;
      this.getFromStatesByCountryCode(countryCode);
    } else {
      this.FromStates = [];
    }

    if (this.selectedToCountry) {
      let countryCode = this.selectedToCountry.code;
      this.getToStatesByCountryCode(countryCode);
    } else {
      this.ToStates = [];
    }
  }


  getFromStatesByCountryCode(code: String) {
    this.stateCountry.getStatesByCode(code).subscribe(data => {
      this.FromStates = data;
      // @ts-ignore
      this.checkoutParentGroup.get('From.State').setValue(data[0]);
      // console.log(data);
    })
  }

  getToStatesByCountryCode(code: String) {
    this.stateCountry.getStatesByCode(code).subscribe(data => {
      this.ToStates = data;
      // @ts-ignore
      this.checkoutParentGroup.get('To.State').setValue(data[0]);
      // console.log(data);
    })
  }

  getTotals() {
    this.cartService.totalOrders.subscribe(
      data => {
        this.totalOrderSize = data;
      }
    )

    this.cartService.totalPrice.subscribe(
      data => {
        this.totalOrderPrice = data;
      }
    )
  }

  clean() {
    this.cartService.orders = [];
    this.cartService.totalOrders.next(0);
    this.cartService.totalPrice.next(0);
    this.checkoutParentGroup.reset();
    this._router.navigate(['main/pages/menu']);
  }
}
