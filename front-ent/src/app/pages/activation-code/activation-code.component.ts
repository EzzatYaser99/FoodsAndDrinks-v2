import {Component, OnInit} from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import {SpaceValidator} from "../../model/space-validator";
import {AuthenticationService} from "../../shared/services/security/authentication.service";
import {Router} from "@angular/router";
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-activation-code',
    templateUrl: './activation-code.component.html',
    styleUrls: ['./activation-code.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, InputTextModule, NgIf, ButtonModule, RippleModule]
})
export class ActivationCodeComponent implements OnInit {

  activeCodeForm: any;
account:string='';
  constructor(private _formBuilder: FormBuilder,
              private authService:AuthenticationService,
              private _router : Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.account = sessionStorage.getItem('account');
    this.myActiveCodeForm();
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

  done() {
    if (this.activeCodeForm.invalid) {
      this.activeCodeForm.markAllAsTouched();
      return;
    }
    this.authService.activeAccount(this.account, this.activeCodeForm.controls['Code'].value)
      .subscribe({
        next: response => {
          if (response.result == 1) {
            sessionStorage.removeItem('account');
            this._router.navigate(['login']);
           } else {
            alert('Invalid Code');
          }
        }
      })
  }
}

