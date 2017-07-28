import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertService, AuthService } from '../shared';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @Input() loading = false;

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
  }

  onSignupGoogle(form: NgForm) {
    this.loading = true;
    this.authService.signUpWithGoogle();
  }

  onSignupTwitter(form: NgForm) {
    this.loading = true;
    this.authService.signUpWithTwitter();
  }

  onSignupFacebook(form: NgForm) {
    this.loading = true;
    this.authService.signUpWithFacebook();
  }

  onSignupGithub(form: NgForm) {
    this.loading = true;
    this.authService.signUpWithGithub();
  }

}
