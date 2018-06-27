import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { AlertService } from './alert.service';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  token: string;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private userService: UserService) { }

  // Signup/register
  signUpWithGoogle() {
    const providerGoogle = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(providerGoogle)
      .then((result) => {
        const token = (<any> result).credential.accessToken;
        const currentUser = result.user;
      })
      .then(response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          );
        this.alertService.showToaster('Verification email is sent to you.');
        this.userService.verificationUserEmail();
        this.userService.saveUserInfo(firebase.auth().currentUser.uid, name, firebase.auth().currentUser.email);
      }
      )
      .catch(
        error => console.error(error)
    );
  }

  signUpWithTwitter() {
    const providerTwitter = new firebase.auth.TwitterAuthProvider();
    return firebase.auth().signInWithPopup(providerTwitter)
      .then((result) => {
        const token = (<any> result).credential.accessToken;
        const currentUser = result.user;
        const secret = (<any> result).credential.sec;
      })
      .then(response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          );
        this.alertService.showToaster('Please check your inbox for a verification email.');
        this.userService.verificationUserEmail();
        this.userService.saveUserInfo(firebase.auth().currentUser.uid, name, firebase.auth().currentUser.email);
      }
      )
      .catch(
        error => console.error(error)
      );
  }

  signUpWithFacebook() {
    const providerFacebook = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(providerFacebook)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
          this.alertService.showToaster('Verification email is sent to you.');
          this.userService.verificationUserEmail();
          this.userService.saveUserInfo(firebase.auth().currentUser.uid, name, firebase.auth().currentUser.email);
        }
      )
      .catch(
        error => console.error(error)
      );
  }

  signUpWithGithub() {
    const providerGithub = new firebase.auth.GithubAuthProvider();
      return firebase.auth().signInWithPopup(providerGithub)
      .then((result) => {
        this.alertService.showToaster('Verification email is sent to you.');
        this.userService.verificationUserEmail();
        this.userService.saveUserInfo(firebase.auth().currentUser.uid, name, firebase.auth().currentUser.email);
      })
      .then(response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          );
      }
      )
      .catch(
        error => console.error(error)
      );
  }

  signupUser(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.alertService.showToaster('Verification email is sent to you.');
        this.userService.verificationUserEmail();
        this.userService.saveUserInfo(firebase.auth().currentUser.uid, name, email);
      }
      ).catch(
        error => console.error(error)
      );
  }

  // Signin/login
  signInWithGoogle() {
    const providerGoogle = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(providerGoogle)
      .then(response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          );
        this.alertService.showToaster('Google login succesful');
      }
      )
      .catch(
        error => console.error(error)
      );
  }

  signInWithTwitter() {
    const providerTwitter = new firebase.auth.TwitterAuthProvider();
    return firebase.auth().signInWithPopup(providerTwitter)
      .then(() => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          );
        this.alertService.showToaster('Twitter login succesful');
      }
      )
      .catch(
        error => console.error(error)
      );
  }

  signInWithFacebook() {
    const providerFacebook = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(providerFacebook)
      .then(() => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
          this.alertService.showToaster('Facebook login succesful');
        }
      )
      .catch(
        error => console.error(error)
      );
  }

  signInWithGithub() {
    const providerGithub = new firebase.auth.GithubAuthProvider();
    return firebase.auth().signInWithPopup(providerGithub)
      .then(() => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          );
        this.alertService.showToaster('Github login succesful');
      }
      )
      .catch(
        error => console.error(error)
      );
  }

  signinUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          // firebase.auth().currentUser.getToken()
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
          this.alertService.showToaster('Login succesful');
        }
      )
      .catch(
        error => console.error(error)
      );
  }

  signInAnonymous() {
    return firebase.auth().signInAnonymously()
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().onAuthStateChanged(currentUser => {
            const isAnonymous = currentUser.isAnonymous;
            const uid = currentUser.uid;
            firebase.auth().currentUser.getIdToken()
              .then(
                (token: string) => this.token = token
              ),
              this.alertService.showToaster('Anonymous login succesful');
            console.log(currentUser);
          });
        }
      )
      .catch(
        error => console.error(error)
      );
  }

  // Other
  logout() {
    return firebase.auth().signOut()
      .then(
        response => {
          this.router.navigate(['/home']);
          this.token = null;
        }
      )
      .catch(
        error => console.error(error)
      );
  }

  getIdToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return firebase.auth().currentUser;
  }
}
