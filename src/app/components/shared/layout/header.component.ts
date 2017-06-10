import { Component } from '@angular/core';
import { Response } from '@angular/http';
import * as firebase from 'firebase';

import { AuthService, AlertService, DataStorageService, UserService } from '../services';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: string = '';
  isAuthenticated = false;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private alertService: AlertService,
    // private userService: UserService
    ) {
      this.isAuthenticated = this.authService.isAuthenticated();
     // this.userService.email = firebase.auth().currentUser.email;
  }

  user() {
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;
    
    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid; 
     }
  }
  
  profileUsername: string = '';

  onLogout() {
    this.authService.logout();
    this.alertService.showToaster('Logout succesful');
  }

  public menuItems: Array<Object> = [
    {
      icon: 'photo_library',
      title: 'Portfolio',
      link: 'https://jerouw.nl'
    },
    {
      icon: 'link',
      title: 'Fork on Github',
      link: 'https://github.com/jeroenouw/Angular4MaterialDesign'
    },
  ];
}
