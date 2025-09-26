import {Component, OnInit} from '@angular/core';
import {LoginUserInformationService} from "../../shared/services/login-user-information.service";
import { Router, RouterLink } from "@angular/router";
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import {AuthenticationService} from "../../shared/services/security/authentication.service";

import {SocialMediaService} from "../../shared/services/social-media.service";
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

import { InputTextModule } from 'primeng/inputtext';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink, InputTextModule, CheckboxModule, ButtonModule, RippleModule]
})
export class LoginComponent implements OnInit {

  loginForm: any;
  IsHttpCaalling: boolean = false;


  constructor(private _loginInfo: LoginUserInformationService,
              private _router: Router,
              private _formBuilder: FormBuilder,
              private _http: HttpClient,
              private authService: AuthenticationService,
private socialMediaService:SocialMediaService){
  }

  ngOnInit(): void {
    this.myLoginForm()
  }

  myLoginForm() {
    this.loginForm = this._formBuilder.group({
      Email: ["",
        [Validators.required,
          Validators.email,
          Validators.pattern]
      ],
      Password: ["",
        [Validators.required,
          Validators.minLength(5),

        ]
      ]
    });

  }


  handelLogin() {
    sessionStorage.setItem("isUserLogin", "true");
    sessionStorage.setItem("email", this.loginForm.controls['Email'].value);
    this._loginInfo.logMeIn();
    this.login();
    // this.IsHttpCaalling = true;

  }


  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.authService.getUserActive(
      this.loginForm.controls['Email'].value, this.loginForm.controls['Password'].value)
      .subscribe(
        response => {
          if (response.active === 1) {
            this.authService.executeAuthentication(
              this.loginForm.controls['Email'].value, this.loginForm.controls['Password'].value
            ).subscribe({
              next: response => {
                this._router.navigate(['main/pages']);
              }
            });
          } else if (response.active === 0) {

            sessionStorage.setItem('account', this.loginForm.controls['Email'].value);
            this._router.navigate(['signup/active']);

          } else {
            alert("invaild Email Or password ")
          }
        }
      )
  }

  signInWithFB(): void {
    // this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
    //   data => {
    //     this.socialMediaService.loginWithFacebook(data.authToken).subscribe({
    //       next: response => {
    //         this._router.navigate(['main/pages']);
    //       }
    //     });
    //     console.log(data.authToken);
    //     console.log(data);
    //   }
    // );
  }










}
