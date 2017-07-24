import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { WindowService, PhoneNumber } from '../../shared';

@Component({
  selector: 'app-phone-signin',
  templateUrl: './phone-signin.component.html',
  styleUrls: ['./phone-signin.component.scss']
})
export class PhoneSigninComponent implements OnInit {

  phoneNumber = new PhoneNumber()

  token: string;
  windowRef: any;
  verificationCode: string;
  currentUser: any;

  constructor(private win: WindowService,
  private router: Router) { }

  ngOnInit() {
    this.windowRef = this.win.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.windowRef.recaptchaVerifier.render()
  }

  sendLoginCode() {
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phoneNumber.e164;
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
      .then(result => {
          this.windowRef.confirmationResult = result;
      })
      .catch( error => console.log(error) );
  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      .then( result => {
        this.currentUser = result.user;
      }) 
      .then(response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
        .then(
            (token: string) => this.token = token
        );
      }) 
    .catch( error => console.log(error, "Incorrect code entered?"));
  }
}
