import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertService, AuthService } from '../shared';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  @Input() loading: boolean = false;

  constructor(
    private authService: AuthService,
    private alertService: AlertService) {
  }

  ngOnInit() {
  
  }

  onSignInGoogle(form: NgForm) {
    this.loading = true;
    this.authService.signInWithGoogle();
    this.alertService.showToaster('Google login succesful');
  }

  onSignInTwitter(form: NgForm) {
    this.loading = true;
    this.authService.signInWithTwitter();
    this.alertService.showToaster('Twitter login succesful');
  }

  onSignInFacebook(form: NgForm) {
    this.loading = true;
    this.authService.signInWithFacebook();
    this.alertService.showToaster('Facebook login succesful');
  }

  onSignInGithub(form: NgForm) {
    this.loading = true;
    this.authService.signInWithGithub();
    this.alertService.showToaster('Github login succesful');
  }

  onSignin(form: NgForm) {
    this.loading = true;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
    this.alertService.showToaster('Login succesful');
  }

  onSigninAnonymous(form: NgForm) {
    this.loading = true;
    this.authService.signInAnonymous();
    this.alertService.showToaster('Anonymous login succesful');
  }

}
