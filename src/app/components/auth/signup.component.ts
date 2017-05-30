import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertService, AuthService } from '../shared';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alertService: AlertService) {
}

  ngOnInit() {
  
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
    this.alertService.showToaster('Verification email is sent to you.');
    // this.alertService.signUpToaster;
  }  
  
  onSignupGoogle(form: NgForm) {
    this.authService.signUpWithGoogle();
    this.alertService.showToaster('Your Google registration is completed.');
  }

  onSignupFacebook(form: NgForm) {
    this.authService.signUpWithFacebook();
    this.alertService.showToaster('Your Facebook registration is completed.');
  }

  onSignupGithub(form: NgForm) {
    this.authService.signUpWithGithub();
    this.alertService.showToaster('Your Github registration is completed.');
  }

  /* onSignupCellphone(form: NgForm) {
    const phoneNumber = form.value.phoneNumber;
    const appVerifier = form.value.appVerifier;
    const code = form.value.code;
    this.authService.signUpWithCellPhone(phoneNumber, appVerifier, code);
    this.alertService.showToaster('Verification SMS is sent to you.');
  }*/

}
