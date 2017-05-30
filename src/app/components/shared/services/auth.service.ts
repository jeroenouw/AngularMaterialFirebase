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
    
    // Start signup/register
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
             .then((result) => { 
                // this.alertService.signUpToaster,
                this.userService.verificationUserEmail();
                this.userService.saveUserInfoFromForm(firebase.auth().currentUser.uid, name, email);
                }
            ).catch(
                error => console.log(error)
            );
    }

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
                }
            )
            .catch((error) => {
              error => console.log(error) 
            });
    }   

    signUpWithGithub() {
        let providerGithub = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(providerGithub)
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

    // End signup/register

    // Start signin/login
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
    
    // End signin/login

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
