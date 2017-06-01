import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { User, Profile } from '../shared';

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
  isUser: boolean;

  profileTitle: string = 'My profile';
  profileName: string = 'Jeroen';
  profileUsername: string = '(Jeroenouw)';
  profileBio: string = 'Here you can place your own personal bio text.'; 
  fullImagePath: string;

  state: string = 'small';
  
  constructor(
    private route: ActivatedRoute) { 
    this.fullImagePath = '/assets/img/mb-bg-04.png';
    }

  animateImage() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
      }
    );
  }
}
