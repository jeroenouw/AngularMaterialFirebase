import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import * as firebase from 'firebase';

import { UserService, AlertService } from '@shared';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    trigger('imageAnimation', [

      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(2)',
      })),

      transition('small <=> large', animate('500ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-80%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(25px)', offset: 1})
      ]))),
    ]),
  ]
})
export class ProfileComponent implements OnInit {
  public uid = firebase.auth().currentUser.uid;

  public fullImagePath: string = '/assets/img/mb-bg-04.png';
  public profileTitle: string = 'My profile';
  public displayName: string = 'Your username';
  public bio: any = 'Your bio';
  public state: string = 'small';

  constructor(
    private userService: UserService,
    private alertService: AlertService) {}

  public ngOnInit(): Promise<void> {
    return firebase.database().ref().child('users/' + this.uid).once('value').then((snap) => {
      this.displayName  = snap.val().displayName,
      this.bio = snap.val().bio
    });
  }

  public animateImage(): void {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  public userEmail(): void {
    this.userService.getUserProfileInformation();
    firebase.auth().currentUser.email;
  }

  public onPasswordReset(): void {
    this.userService.sendUserPasswordResetEmail();
    this.alertService.showToaster('Reset password is sent to your email');
  }

}
