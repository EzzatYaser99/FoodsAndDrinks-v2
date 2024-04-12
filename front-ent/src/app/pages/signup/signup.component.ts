import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, ReactiveFormsModule, FormsModule} from "@angular/forms";
import {LoginUserInformationService} from "../../shared/services/login-user-information.service";
import {Router, RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../shared/services/security/authentication.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {SpaceValidator} from "../../model/space-validator";
import {NgForOf, NgIf} from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {RadioButtonModule} from "primeng/radiobutton";
import {PasswordModule} from "primeng/password";
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, InputTextModule, NgIf, ButtonModule, RippleModule, InputGroupModule, InputGroupAddonModule, RadioButtonModule, FormsModule, NgForOf, PasswordModule,TooltipModule]
})
export class SignupComponent implements OnInit {
  signupForm: any;
  isLoading: boolean = false;
  genderList: any[] = [
    {name: 'Male', value: 1},
    {name: 'Female', value: 2},
  ];
  selectedGenderType: any = null;
  regexForMobNum = '(^((\\+?)\\d{1,3}[- ]?)?\\d{10,11}$)';
  mobileNumberValidation: string = 'Phone Number must be follow patterns \n ' +
    '( 10 digits Mobile Number ) Like 8087339090          \n'+
    ' OR ( 11 digits Mobile Number ) Like 08087339090          \n'+
    ' OR ( {+1,+91,+912} + 10 digits ) Like +1 8087339090     \n'+
    ' OR ( {+1-,+91-,+912-} + 10 digits ) Like +1-8087339090  \n' ;
   userMobilePhone: any;
   validMobilePhone: boolean=false;

  constructor(
    private _router: Router,private _formBuilder: FormBuilder,private authService: AuthenticationService) {

  }

  ngOnInit(): void {
    this.mySignupForm()
    this.selectedGenderType = this.genderList[1];
  }

  mySignupForm() {
    this.signupForm = this._formBuilder.group({
      UserName: [
        '',
      ],
      Email: [
        '',
        [Validators.required,
          SpaceValidator.onlyContainSpace,
          Validators.email,
          Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]
      ],
      Password: [
        '',
        [Validators.required,
          Validators.minLength(5),

        ]
      ],
      ConfirmPassword: [
        '',
        [Validators.required,
          Validators.minLength(5),

        ]
      ]
    });
  }


  done() {
    this.isLoading = true;
    this.authService.createUser(
      this.signupForm.controls['Email'].value, this.signupForm.controls['Password'].value)
      .subscribe({
        next: response => {
          // alert(this.signupForm.controls['Email'].value)
          // alert(this.signupForm.controls['Password'].value)
          if (response.result == 1) {
            sessionStorage.setItem('account', this.signupForm.controls['Email'].value);
            this._router.navigate(['signup/active']);
          } else {
            this.isLoading = false;
            alert('Email is Exist');
          }

        }, error: error => {
          this.isLoading = false
          alert("Email or Password is invaild")

        }

      });

    setTimeout(() => {
      this.isLoading = false
    }, 2000);

  }


  Cancel() {
    this._router.navigate(['login']);
  }

  onChangeGenderType(event:any) {
    this.selectedGenderType=event;
  }


  onChangeMobileNumber(event:any) {
    debugger
    this.userMobilePhone = event?.target?.value;
  }

  private checkEmployeeMobilePhoneValidation() {
    this.validMobilePhone = this.userMobilePhone?.Mobile_Phone?.match(/^((\+?)\d{1,3}[- ]?)?\d{10,11}$/) &&
      !(this.userMobilePhone.Mobile_Phone.match(/0{5,}/));
    if(this.validMobilePhone) {
      return true;
    } else {
      // show alert
      return false
    }
  }







}
