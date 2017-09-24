import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import * as firebase from 'firebase';

import { User, Profile, UserService, AlertService } from '../shared';

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
  uid = firebase.auth().currentUser.uid;

  fullImagePath: string;
  profileTitle: string = 'My profile';
  displayName: string = "Your username";
  bio: any = "Your bio";

  state = 'small';

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private alertService: AlertService) {
    this.fullImagePath = '/assets/img/mb-bg-04.png';
  }

  ngOnInit() {
    firebase.database().ref().child('users/' + this.uid).once('value').then((snap) => {
      this.displayName  = snap.val().displayName, 
      this.bio = snap.val().bio
    });
  }

  animateImage() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  userEmail() {
    this.userService.getUserProfileInformation();
    return firebase.auth().currentUser.email;
  }

  onPasswordReset() {
    this.userService.sendUserPasswordResetEmail();
    this.alertService.showToaster('Reset password is sent to your email');
  }

}
