import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertService, AuthService } from '../shared';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alertService: AlertService) {
}

  ngOnInit() {
  
  }

  onSignInGoogle(form: NgForm) {
    this.authService.signInWithGoogle();
    this.alertService.showToaster('Google login succesful');
  }

  onSignInFacebook(form: NgForm) {
    this.authService.signInWithFacebook();
    this.alertService.showToaster('Facebook login succesful');
  }

  onSignInGithub(form: NgForm) {
    this.authService.signInWithGithub();
    this.alertService.showToaster('Github login succesful');
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
    this.alertService.showToaster('Login succesful');
  }

  onSigninAnonymous(form: NgForm) {
    this.authService.signInAnonymous();
    this.alertService.showToaster('Anonymous login succesful');
  }

}
