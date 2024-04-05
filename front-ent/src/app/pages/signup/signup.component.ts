import {Component, OnInit} from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import {LoginUserInformationService} from "../../shared/services/login-user-information.service";
import { Router, RouterLink } from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../shared/services/security/authentication.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {SpaceValidator} from "../../model/space-validator";
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink, InputTextModule, NgIf, ButtonModule, RippleModule]
})
export class SignupComponent implements OnInit {
  signupForm: any;
  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    // private _http: HttpClient,
    private authService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.mySignupForm()

  }

  mySignupForm() {
    this.signupForm = this._formBuilder.group({
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
      ]
    });
  }


  done() {
    this.authService.createUser(
      this.signupForm.controls['Email'].value, this.signupForm.controls['Password'].value)
      .subscribe({
      next: response => {
        // alert(this.signupForm.controls['Email'].value)
        // alert(this.signupForm.controls['Password'].value)
        if (response.result == 1) {
          sessionStorage.setItem('account',this.signupForm.controls['Email'].value);
          this._router.navigate(['signup/active']);
        } else {
          alert('Email is Exist');
        }

      }, error: error => {
        alert("Email or Password is invaild")

      }

    });


  }


}
