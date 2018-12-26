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

  // Signup/registration
  public signUpWithGoogle(): Promise<void> {
    const providerGoogle = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(providerGoogle)
      .then(() => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          );
        this.verificationEmail();
      })
      .catch(
        error => this.alertService.showToaster(error)
    );
  }

  public signUpWithTwitter(): Promise<void>  {
    const providerTwitter = new firebase.auth.TwitterAuthProvider();
    return firebase.auth().signInWithPopup(providerTwitter)
      .then(() => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          );
        this.verificationEmail();
      })
      .catch(
        error => this.alertService.showToaster(error)
      );
  }

  public signUpWithFacebook(): Promise<void>  {
    const providerFacebook = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(providerFacebook)
      .then(() => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          );
        this.verificationEmail();
      })
      .catch(
        error => this.alertService.showToaster(error)
      );
  }

  public signUpWithGithub(): Promise<void> {
    const providerGithub = new firebase.auth.GithubAuthProvider();
      return firebase.auth().signInWithPopup(providerGithub)
      .then(() => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          );
        this.verificationEmail();
      })
      .catch(
        error => this.alertService.showToaster(error)
      );
  }

  public signupUser(email: string, password: string): Promise<void> {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.verificationEmail();
      })
      .catch(
        error => this.alertService.showToaster(error)
      );
  }

  // Signin/login
  public signInWithGoogle(): Promise<void> {
    const providerGoogle = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(providerGoogle)
      .then(() => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          );
        this.alertService.showToaster('Google login succesful');
      })
      .catch(
        error => this.alertService.showToaster(error)
      );
  }

  public signInWithTwitter(): Promise<void> {
    const providerTwitter = new firebase.auth.TwitterAuthProvider();
    return firebase.auth().signInWithPopup(providerTwitter)
      .then(() => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          );
        this.alertService.showToaster('Twitter login succesful');
      })
      .catch(
        error => this.alertService.showToaster(error)
      );
  }

  public signInWithFacebook(): Promise<void> {
    const providerFacebook = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(providerFacebook)
      .then(() => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          );
        this.alertService.showToaster('Facebook login succesful');
      })
      .catch(
        error => this.alertService.showToaster(error)
      );
  }

  public signInWithGithub(): Promise<void> {
    const providerGithub = new firebase.auth.GithubAuthProvider();
    return firebase.auth().signInWithPopup(providerGithub)
      .then(() => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          );
        this.alertService.showToaster('Github login succesful');
      })
      .catch(
        error => this.alertService.showToaster(error)
      );
  }

  public signinUser(email: string, password: string): Promise<void> {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          );
        this.alertService.showToaster('Login succesful');
      })
      .catch(
        error => this.alertService.showToaster(error)
      );
  }

  public signInAnonymous(): Promise<void> {
    return firebase.auth().signInAnonymously()
      .then(() => {
        this.router.navigate(['/']);
        firebase.auth().onAuthStateChanged(() => {
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            ),
            this.alertService.showToaster('Anonymous login succesful');
        });
      })
      .catch(
        error => this.alertService.showToaster(error)
      );
  }

  // Other
  public logout(): Promise<void> {
    return firebase.auth().signOut()
      .then(() => {
        this.token = null;
        this.router.navigate(['/home']);
      })
      .catch(
        error => this.alertService.showToaster(error)
      );
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
