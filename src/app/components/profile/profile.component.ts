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
  profile: Profile;
  currentUser: User;
  user: {uid: any};

  profileTitle = 'My profile';
  // profileBio: string = 'Here you can place your own personal bio text.';
  fullImagePath: string;

  state = 'small';

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private alertService: AlertService) {
              this.fullImagePath = '/assets/img/mb-bg-04.png';
  }

  ngOnInit() {
    this.user = {
      uid: this.route.snapshot.params['uid']  
    };
    this.route.params
      .subscribe(
        (params: Params) => {
          this.user.uid = params['uid'];
        }
      );
  }

  animateImage() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  userEmail() {
    this.userService.getUserProfileInformation();
    return firebase.auth().currentUser.email;
  }

  userName() {
    this.userService.getUserProfileInformation();
    return firebase.auth().currentUser.displayName;
  }

  onPasswordReset() {
    this.userService.sendUserPasswordResetEmail();
    this.alertService.showToaster('Reset password is sent to your email');
  }

}
