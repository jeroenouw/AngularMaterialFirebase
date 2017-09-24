import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

import { User, Profile } from '../models';
import { AlertService } from './alert.service';

@Injectable()
export class UserService {
  public displayName: string;
  public email: string;
  public bio: any;
  public image: any;
  public uid: any;

  constructor(private alertService: AlertService) {
  }

  saveUserInfo(uid, name, email
  // uid, token, image, name, username, bio, email, password
  ) {
    return firebase.database().ref().child('users/' + uid).set({
      name: name,
      email: email
    });
  }

  updateUserInfo(uid, displayName, bio) {
    return firebase.database().ref().child('users/' + uid).update({
      // token: token,
      // image: this.image,
      displayName: displayName,
      bio: bio
      // password: password
    })
  }

  getAdmin() {
    return firebase.database().ref().child('users/' + 'RA21zYtgPHbvG764Ehn3ch8NEHP2').on('value', (snapshot) => {
    });
  }

  keepInTouch(email) {
    this.alertService.showToaster('Your email is saved');
    return firebase.database().ref().child('touch/').push({
      email: email
    });
  }

  contactFormSend(company, firstname, lastname, address, city, postal, message) {
    this.alertService.showToaster('This contact form is saved');
    return firebase.database().ref().child('contactform/').push({
      company: company,
      firstname: firstname,
      lastname: lastname,
      address: address,
      city: city,
      postal: postal,
      message: message
    });
  }

  /*
  specificUserProfile() {
      if (firebase.auth().currentUser != null) {
        firebase.auth().currentUser.providerData.forEach((profile) => {
          console.log("Sign-in provider: "+profile.providerId);
          console.log("  Provider-specific UID: "+profile.uid);
          console.log("  Name: "+profile.displayName);
          console.log("  Email: "+profile.email);
          console.log("  Photo URL: "+profile.photoURL);
          return "  Email: "+profile.email;
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
    const user = firebase.auth().currentUser;
    let name, email, photoUrl, uid, emailVerified;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;
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
