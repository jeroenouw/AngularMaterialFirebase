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
    // this.alertService.showToaster('Your registration is completed');
    this.alertService.signUpToaster;
  }  
  
  onSignupGoogle(form: NgForm) {
    this.authService.signUpWithGoogle();
    this.alertService.showToaster('Your Google registration is completed');
  }

  onSignupFacebook(form: NgForm) {
    this.authService.signUpWithFacebook();
    this.alertService.showToaster('Your Facebook registration is completed');
  }

}
