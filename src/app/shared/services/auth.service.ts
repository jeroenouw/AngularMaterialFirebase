import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { AlertService } from './alert.service';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  public token: string;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private userService: UserService) { }

  public onSuccess(): void {
    this.token = 'some-temporary-token';
    this.router.navigate(['/']);
  }

  // Other
  public logout(): void {
    this.token = null;
    this.router.navigate(['/home']);
  }

  public getIdToken(): string {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  public isAuthenticated(): boolean {
    return this.token != null;
  }

  private verificationEmail(): void {
    this.alertService.showToaster('Please check your inbox for a verification email.');
    this.userService.verificationUserEmail();
    this.userService.saveUserInfo(firebase.auth().currentUser.uid, name, firebase.auth().currentUser.email);
  }
}
