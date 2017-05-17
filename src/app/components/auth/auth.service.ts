import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    token: string;
    constructor(private router: Router) {

    }
    
    // Sign up/register section
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            );
    }

    signUpWithGoogle() { 
        var providerGoogle = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(providerGoogle)
            .then(function(result) {
                var token = result.credential.accessToken;
                var user = result.user;
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
        var providerFacebook = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(providerFacebook)
            .then(function(result) {
                var token = result.credential.accessToken;
                var user = result.user;
            })
            .catch(function(error) {
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
