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
    
    // Start signup/register
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
                /*firebase.auth().currentUser.getIdToken()
                    .then(
                        (token: string) => this.token = token
                    ); */
            }/*,
             response => {
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getIdToken()
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

    // End signup/register

    // Start signin/login
    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
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

    signInAnonymous() {
        firebase.auth().signInAnonymously()
        .then(
            response => {
                this.router.navigate(['/'])
                firebase.auth().onAuthStateChanged(currentUser => {
                    console.log(currentUser);
                })                    
            }
        )
        .then(
            (token: string) => this.token = token
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

    getToken() {
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
