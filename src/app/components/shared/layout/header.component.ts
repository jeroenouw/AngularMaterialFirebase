import { Component } from '@angular/core';
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
    private userService: UserService
    ) {
      this.isAuthenticated = this.authService.isAuthenticated();
  }

  userUid() {
    this.userService.getUserProfileInformation();
    return firebase.auth().currentUser.uid;
  }

  userEmail() {
    this.userService.getUserProfileInformation();
    return firebase.auth().currentUser.email;
  }

  userName() {
    this.userService.getUserProfileInformation();
    return firebase.auth().currentUser.displayName;
  }

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
