import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { User, Profile } from '../models';

// const currentUser = firebase.auth().currentUser;

@Injectable()
export class UserService {

    constructor(private authService: AuthService) {

    }

    // Profile
    /*
    userProfile() {

    }

    specificUserProfile() {
        
        if (firebase.auth().currentUser != null) {
          firebase.auth().currentUser.providerData.forEach((profile) => {
            console.log("Sign-in provider: "+profile.providerId);
            console.log("  Provider-specific UID: "+profile.uid);
            console.log("  Name: "+profile.displayName);
            console.log("  Email: "+profile.email);
            console.log("  Photo URL: "+profile.photoURL);
          });
        }
    }
    
    getUserProfile() {
        firebase.auth().onAuthStateChanged((currentUser) => {
          if (currentUser = this.authService.isAuthenticated) {
            console.log(currentUser);
          } else {

          }
        });
    }  
    */
    getUserProfileInformation() {
        let name, email, photoUrl, uid, emailVerified;
        if (firebase.auth().currentUser != null) {
          //name = firebase.auth().currentUser.displayName;
          email = firebase.auth().currentUser.email;
          //photoUrl = firebase.auth().currentUser.photoURL;
          //emailVerified = firebase.auth().currentUser.emailVerified;
          //uid = firebase.auth().currentUser.uid;
        }
    }
    /*
    updateUserProfile() {
        firebase.auth().currentUser.updateProfile({
          displayName: "Jeroenouw",
          photoURL: "https://cdn.pixabay.com/photo/2017/05/05/18/31/stonehenge-2287980_960_720.jpg"
        }).then(() => {
          // Update successful.
        }, (error) => {
          // An error happened.
        });
    }    
    
    deleteUserProfile() {
        firebase.auth().currentUser.delete().then(() => {
          // User deleted.
        }, (error) => {
          // An error happened.
        });
    }  
    
    // Email
    updateUserEmail() {
        firebase.auth().currentUser.updateEmail("test@test.nl")
            .then(() => {
              // Update successful.
            }, (error) => {
              // An error happened.
            });        
    }    
    */
    verificationUserEmail() {
        firebase.auth().currentUser.sendEmailVerification().then(() => {
          // Email sent.
        }, (error) => {
          // An error happened.
        });
    }

    // Password
    /*
    updateUserPassword() {
        let newPassword = getASecureRandomPassword();
        
        currentUser.updatePassword(getASecureRandomPassword).then(() => {
          // Update successful.
        }, (error) => {
          // An error happened.
        });
    } 
    */ 
    
    sendUserPasswordResetEmail() {
        firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email).then(() => {
          // Email sent.
        }, (error) => {
          // An error happened.
        });
    } 
    
       
}