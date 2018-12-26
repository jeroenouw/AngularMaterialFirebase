import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '@shared';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public loading: boolean = false;

  constructor(private authService: AuthService) {}

  public onSignup(form: NgForm): Promise<void>{
    const email = form.value.email;
    const password = form.value.password;
    return this.authService.signupUser(email, password);
  }

  public onSignupGoogle(form: NgForm): Promise<void>{
    this.loading = true;
    return this.authService.signUpWithGoogle();
  }

  public onSignupTwitter(form: NgForm): Promise<void>{
    this.loading = true;
    return this.authService.signUpWithTwitter();
  }

  public onSignupFacebook(form: NgForm): Promise<void>{
    this.loading = true;
    return this.authService.signUpWithFacebook();
  }

  public onSignupGithub(form: NgForm): Promise<void>{
    this.loading = true;
    return this.authService.signUpWithGithub();
  }

}
