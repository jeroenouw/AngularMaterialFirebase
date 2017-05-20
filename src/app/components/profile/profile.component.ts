import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User, Profile } from '../shared/index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  fullImagePath: string;
  
  constructor(
    private route: ActivatedRoute) { 
    this.fullImagePath = '/assets/img/mb-bg-04.png';
    }

  profile: Profile;
  currentUser: User;
  isUser: boolean;

  profileTitle: string = 'My profile';
  profileName: string = 'Jeroen';
  profileUsername: string = '(Jeroenouw)';
  profileBio: string = 'Here you can place your own personal bio text.'; 

  ngOnInit() {
    this.route.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
      }
    );
  }


}