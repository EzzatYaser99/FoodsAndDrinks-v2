import {Component, OnInit} from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import {SpaceValidator} from "../../model/space-validator";
import {AuthenticationService} from "../../shared/services/security/authentication.service";
import {Router} from "@angular/router";
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, InputTextModule, ButtonModule, RippleModule]
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: any;
  enableResetForm: boolean = true;

  constructor(private _formBuilder: FormBuilder,
              private authService: AuthenticationService,
              private _router: Router,) {

  }

  ngOnInit(): void {
    this.myActiveCodeForm();
  }

  myActiveCodeForm() {
    this.resetPasswordForm = this._formBuilder.group({
      Email: ['', [
        Validators.required,
          SpaceValidator.onlyContainSpace,
          Validators.email,
          Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
      ]

      ],
      Code: ['', [
          Validators.required,
          SpaceValidator.onlyContainSpace,
        ]
      ],
      Password: ['', [
        Validators.required,
          Validators.minLength(5),
        ]
      ]
    });
  }

  done() {
this.authService.checkEmail(this.resetPasswordForm.controls['Email'].value)
  .subscribe(
    response=> {
      if (response.result == 1) {
        this.enableResetForm = false;
      } else {
        alert("Email Not Found")
        this._router.navigate(['signup'])
      }

    })
  }

  resetPassword() {
this.authService.resetPassword(
  this.resetPasswordForm.controls['Email'].value,
  this.resetPasswordForm.controls['Code'].value,
  this.resetPasswordForm.controls['Password'].value)
  .subscribe(
    response=> {
      if (response.result == 1) {
        alert("Success Edit Password")
       this._router.navigate(['login'])
      } else {
        alert("Invalid Code please Try Again")
      }

    })
  }
}
