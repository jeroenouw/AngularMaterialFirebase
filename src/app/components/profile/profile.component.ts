import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User, Profile } from '../shared/index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute) { 

    }

  profile: Profile;
  currentUser: User;
  isUser: boolean;

  profileUsername: string = 'Jeroen';
  profileBio: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl ligula.'; 

  ngOnInit() {
    this.route.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
      }
    );
  }


}