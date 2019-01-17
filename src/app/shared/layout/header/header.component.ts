import { Component } from '@angular/core';
import * as firebase from 'firebase';

import { AuthService, AlertService, UserService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public title: string = '';
  public isAuthenticated: boolean = false;
  public angularImage: string = '/assets/img/angular2.png';

  public menuItems: Object[] = [
    {
      icon: 'description',
      title: 'Medium @jeroenouw',
      link: 'https://medium.com/@jeroenouw'
    },
    {
      icon: 'archive',
      title: 'Published packages',
      link: 'https://www.npmjs.com/~jeroenouw'
    },
    {
      icon: 'link',
      title: 'Fork on Github',
      link: 'https://github.com/jeroenouw/AngularMaterialFirebase'
    },
  ];

  constructor(
    public authService: AuthService,
    private alertService: AlertService,
    private userService: UserService
    ) {
      this.isAuthenticated = this.authService.isAuthenticated()
  }

  public userUid(): string{
    this.userService.getUserProfileInformation();
    return firebase.auth().currentUser.uid;
  }

  public userEmail(): string {
    this.userService.getUserProfileInformation();
    return firebase.auth().currentUser.email;
  }

  public userName(): string {
    this.userService.getUserProfileInformation();
    return firebase.auth().currentUser.displayName;
  }

  public onLogout(): void {
    this.alertService.showToaster('Logout succesful');
    return this.authService.logout();
  }
}
