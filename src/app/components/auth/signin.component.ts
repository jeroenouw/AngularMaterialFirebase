import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertService, AuthService } from '../shared';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alertService: AlertService) {
}

  ngOnInit() {
    
  }
  
  onSignupGoogle(form: NgForm) {
    this.authService.signUpWithGoogle();
    this.alertService.showToaster('Google login succesful');
  }

  onSignupFacebook(form: NgForm) {
    this.authService.signUpWithFacebook();
    this.alertService.showToaster('Facebook login succesful');
  }

  onSignupGithub(form: NgForm) {
    this.authService.signUpWithGithub();
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
