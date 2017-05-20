import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from './alert.service';

@Injectable()
export class AuthService {
    token: string;
    constructor(private router: Router, 
                private alertService: AlertService) {

    }
    
    // Sign up/register section
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
             .then((result) => {
                return this.alertService.signUpToaster;
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
                let user = result.user;
            }/*,
             response => {
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getToken()
                    .then(
                        (token: string) => this.token = token
                    );
                } */
            )
            .catch( 
                error => console.log(error) 
            );
    }

    signUpWithFacebook() {
        let providerFacebook = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(providerFacebook)
            .then((result) => {
                let token = result.credential.accessToken;
                let user = result.user;
            })
            .catch((error) => {
              error => console.log(error) 
            });
    }    

    // Sign in/login section
    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getToken()
                    .then(
                        (token: string) => this.token = token
                    );
                }
            )
            .catch( 
                error => console.log(error)
            );
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }

    getToken() {
        firebase.auth().currentUser.getToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
