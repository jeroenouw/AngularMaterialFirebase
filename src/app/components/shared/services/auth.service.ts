import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from './alert.service';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
    token: string;
    constructor(private router: Router, 
                private alertService: AlertService,
                private userService: UserService
                ) {

    }
    
    // Signup/register
    signUpWithGoogle() { 
        let providerGoogle = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(providerGoogle)
            .then((result) => {
                let token = result.credential.accessToken;
                let currentUser = result.user;
            })
            .then(response => {
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getIdToken()
                    .then(
                        (token: string) => this.token = token
                    );
                this.userService.verificationUserEmail();
                this.userService.saveUserInfo(firebase.auth().currentUser.uid, name, firebase.auth().currentUser.email);
                } 
            )
            .catch( 
                error => console.log(error) 
            );
    }

    signUpWithFacebook() {
        let providerFacebook = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(providerFacebook)
            .then(
                response => {
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getIdToken()
                    .then(
                        (token: string) => this.token = token
                    );
                this.userService.verificationUserEmail();
                this.userService.saveUserInfo(firebase.auth().currentUser.uid, name, firebase.auth().currentUser.email);
                }
            )
            .catch((error) => {
              error => console.log(error) 
            });
    }   

    signUpWithGithub() {
        let providerGithub = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(providerGithub)
            .then((result) => {
                let token = result.credential.accessToken;
                let currentUser = result.user;
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
                error => console.log(error) 
            );
    } 
    
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
             .then((result) => {
                // this.alertService.signUpToaster,
                this.userService.verificationUserEmail();
                this.userService.saveUserInfo(firebase.auth().currentUser.uid, name, email);
                }
            ).catch(
                error => console.log(error)
            );
    }

    /* signUpWithCellPhone(phoneNumber: any, appVerifier: any, code: any) {
        let cellphoneVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
          'size': 'invisible',
          'callback': (response) => { 
          },
          'expired-callback': () => {
          }
        });
            firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                .then((confirmationResult) => {
                    confirmationResult.confirm(code).then((result) => {
                      // User signed in successfully.
                      var user = result.user;
                      // ...
                    })
                  // SMS sent. Prompt user to type the code from the message, then sign the
                  // user in with confirmationResult.confirm(code).
                  confirmationResult = confirmationResult;
                }).catch((error) => {
                    this.router.navigate(['/login']);
                });
    }
    */

    // Signin/login
    signInWithGoogle() { 
        let providerGoogle = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(providerGoogle)
            .then((result) => {
                let token = result.credential.accessToken;
                let currentUser = result.user;
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
                error => console.log(error) 
            );
    }

    signInWithFacebook() {
        let providerFacebook = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(providerFacebook)
            .then(
                response => {
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getIdToken()
                    .then(
                        (token: string) => this.token = token
                    );
                }
            )
            .catch((error) => {
              error => console.log(error) 
            });
    } 

    signInWithGithub() {
        let providerGithub = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(providerGithub)
            .then((result) => {
                let token = result.credential.accessToken;
                let currentUser = result.user;
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
                error => console.log(error) 
            );
    } 

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.router.navigate(['/']);
                    // firebase.auth().currentUser.getToken()
                    firebase.auth().currentUser.getIdToken()
                    .then(
                        (token: string) => this.token = token
                    );
                }
            )
            .catch( 
                error => console.log(error)
            );
    }

    signInAnonymous() {
        firebase.auth().signInAnonymously()
        .then(
            response => {
                this.router.navigate(['/'])
                firebase.auth().onAuthStateChanged(currentUser => {
                    let isAnonymous = currentUser.isAnonymous;
                    let uid = currentUser.uid;
                    firebase.auth().currentUser.getIdToken()
                    .then(
                        (token: string) => this.token = token
                    ),
                    console.log(currentUser);
                })                    
            }
        )
        .catch( 
            error => console.log(error)
        );
    }

    // Other
    logout() {
        firebase.auth().signOut()
        .then(
                response => {
                    this.router.navigate(['/home']);
                } 
        )
        .catch( 
             error => console.log(error)
        );
        this.token = null;
    }

    getIdToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
