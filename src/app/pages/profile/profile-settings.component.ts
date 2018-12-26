import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import * as firebase from 'firebase';

import { AuthService, AlertService, UserService } from '@shared';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  public uid = firebase.auth().currentUser.uid;
  public displayName: string = 'Your username';
  public bio: any = 'Your bio';

  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private userService: UserService) {
  }

  public ngOnInit(): Promise<void> {
    return firebase.database().ref().child(`users/${this.uid}`).once('value').then((snap) => {
      this.displayName = snap.val().displayName;
      this.bio = snap.val().bio;
    });
  }

  public onPasswordReset(): void {
    this.userService.sendUserPasswordResetEmail();
    this.alertService.showToaster('Reset password is sent to your email');
  }

  public onUpdateUserInfo(form: NgForm): void {
    const displayName = form.value.displayName;
    const bio = form.value.bio;
    this.userService.updateUserInfo(firebase.auth().currentUser.uid, displayName, bio);
    this.alertService.showToaster('Your settings are saved');
  }

  public onLogout(): void {
    this.authService.logout();
    this.alertService.showToaster('Logout succesful');
  }

}
