import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../../shared/services/security/authentication.service";
import {SpaceValidator} from "../../model/space-validator";
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {RadioButtonModule} from "primeng/radiobutton";
import {PasswordModule} from "primeng/password";
import {TooltipModule} from 'primeng/tooltip';
import Swal, {SweetAlertOptions} from 'sweetalert2'
import {CheckboxModule} from "primeng/checkbox";
import {User} from "../../model/user";
import {StepperModule} from "primeng/stepper";
import {IconFieldModule} from "primeng/iconfield";
import {InputIconModule} from "primeng/inputicon";
import {ToggleButtonModule} from "primeng/togglebutton";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, InputTextModule, NgIf, ButtonModule, RippleModule, InputGroupModule, InputGroupAddonModule, RadioButtonModule, FormsModule, NgForOf, PasswordModule, TooltipModule, CheckboxModule, StepperModule, NgClass, IconFieldModule, InputIconModule, ToggleButtonModule]
})
export class SignupComponent implements OnInit ,OnDestroy{
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

  passwordValidation: string = 'At least 8 characters long\n' +
    'Contains at least one uppercase letter\n' +
    'Contains at least one lowercase letter\n' +
    'Contains at least one digit' ;
   userMobilePhone: any;
  acceptedTermsOfUseAndPrivacyPolicy: boolean = false;
  disableSubmitButton : boolean = true;
  active: number = 0 ;
  activeCodeForm: any;
  account:string='';

  constructor(
    private _router: Router,private _formBuilder: FormBuilder,private authService: AuthenticationService) {

  }

  ngOnInit(): void {
    this.mySignupForm()
    this.selectedGenderType = this.genderList[1].name;
    // @ts-ignore
    // this.account = sessionStorage.getItem('account');
    this.myActiveCodeForm();
    this.startTimer();


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
          Validators.minLength(8),
          Validators.pattern( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/)
        ]
      ],
      ConfirmPassword: [
        '',
        [Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\\d]{8,}$/)

        ]
      ]
    });
  }


  createUser(nextCallback?:any) {
    if (!this.checkUserMobilePhoneValidation() || !this.checkUserPasswordConfirm() || !this.checkUserEmailValidation()) {
      return
    }
    // @ts-ignore
    let user = new User();
    user.name = this.signupForm.controls['UserName'].value;
    user.mobilePhone = this.userMobilePhone;
    user.email = this.signupForm.controls['Email'].value;
    user.gender = this.selectedGenderType;
    user.password = this.signupForm.controls['Password'].value;
    user.acceptPolicy = this.acceptedTermsOfUseAndPrivacyPolicy;
    let userBody: any = JSON.stringify(user)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

      this.authService.createUser(userBody,httpOptions)
        .subscribe({
          next: response => {
            if (response.result == 1) {
              sessionStorage.setItem('account', user.email);
              // this._router.navigate(['signup/active']);
              nextCallback.emit()
            } else {
              alert('Email is Exist');
            }

          }, error: error => {
            alert("Email or Password is invaild")
          }
        });

  }


  Cancel() {
    this._router.navigate(['login']);
  }

  onChangeGenderType(event:any) {
    this.selectedGenderType=event;
  }


  onChangeMobileNumber(event:any) {
    this.userMobilePhone = event?.target?.value;
  }

  private checkUserPasswordConfirm() {
    const password = this.signupForm.controls['Password'].value;
    const confirmPassword = this.signupForm.controls['ConfirmPassword'].value;

    if (password !== confirmPassword) {
      this.displayPasswordMismatchError();
      return false;
    }

    return true;
  }


  onChangeEmailAddress(event: any) {
    this.account = event?.target.value;
    this.signupForm.controls['Email'].value = event?.target.value;
  }
  private checkUserMobilePhoneValidation() {
    const isValidMobilePhone = this.validateMobilePhoneFormat() && this.validateNoRepeatedZeros();

    if (!isValidMobilePhone) {
      this.displayInvalidMobilePhoneError();
    }

    return isValidMobilePhone;
  }

  private validateMobilePhoneFormat() {
    const mobilePhoneRegex = /^((\+?)\d{1,3}[- ]?)?\d{10,11}$/;
    return !!this.userMobilePhone?.match(mobilePhoneRegex);
  }

  private validateNoRepeatedZeros() {
    return !this.userMobilePhone?.match(/0{5,}/);
  }

  private displayInvalidMobilePhoneError() {
    Swal.fire({
      icon: "error",
      text: "Invalid mobile phone number",
      confirmButtonColor: "#0d6efd",
      confirmButtonText: "OK"
    });
  }
  private checkUserEmailValidation() {
    const isValidEmailAddress = this.validateEmailAddressFormat() ;

    if (!isValidEmailAddress) {
      this.displayInvalidEmailAddressError();
    }

    return isValidEmailAddress;
  }

  private validateEmailAddressFormat() {
    const EmailAddressRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const userEmailAddress = this.signupForm.controls['Email'].value;
    return !!userEmailAddress?.match(EmailAddressRegex);
  }

  private displayInvalidEmailAddressError() {
    Swal.fire({
      icon: "error",
      text: "Invalid Email Address",
      confirmButtonColor: "#0d6efd",
      confirmButtonText: "OK"
    });
  }

  private displayPasswordMismatchError() {
    Swal.fire({
      icon: "error",
      text: "Passwords do not match",
      confirmButtonColor: "#0d6efd",
      confirmButtonText: "OK"
    });
  }

  onChangeAcceptedTermsOfUseAndPrivacyPolicy(event:any) {
    this.acceptedTermsOfUseAndPrivacyPolicy = event.checked;
    this.disableSubmitButton = !this.disableSubmitButton
  }


  onChangeConfirmPassword() {
    let password :string = this.signupForm.controls['Password'].value  ;
    this.signupForm.get('ConfirmPassword').setValidators([Validators.required, Validators.pattern(password)]);
    this.signupForm.get('ConfirmPassword').updateValueAndValidity();
  }

  myActiveCodeForm() {
    this.activeCodeForm = this._formBuilder.group({
      Code: [
        '',
        [Validators.required,
          SpaceValidator.onlyContainSpace,

        ]
      ],

    });
  }

  activeAccount(nextCallback?: any) {
    if (this.activeCodeForm.invalid) {
      this.activeCodeForm.markAllAsTouched();
      return;
    }
    this.authService.activeAccount(this.account, this.activeCodeForm.controls['Code'].value)
      .subscribe({
        next: response => {
          if (response.result == 1) {
            sessionStorage.removeItem('account');
            // this._router.navigate(['login']);
            nextCallback.emit()

          } else {
            alert('Invalid Code');
          }
        }
      })
  }


  getStarted() {
    this._router.navigate(['login']);
  }

  goNextThenCreateUser(nextCallback: any) {
   this.createUser(nextCallback)

  }

  timer: number = 20;
  timerInterval: any;

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
        clearInterval(this.timerInterval);
        // Timer expired, perform necessary actions
        // For example, prompt the user to enter OTP
      }
    }, 1000);
  }


  ngOnDestroy(): void {
    clearInterval(this.timerInterval);
  }

}
