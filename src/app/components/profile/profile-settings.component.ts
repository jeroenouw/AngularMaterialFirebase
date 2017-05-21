import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { Response } from '@angular/http';

import { User, Profile, DataStorageService, AuthService, AlertService } from '../shared';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  user: User = new User();
  settingsForm: FormGroup;
  errors: Object = {};
  isSubmitting = false;

  constructor(
    private router: Router,
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private alertService: AlertService,
    private fb: FormBuilder) { 

      this.settingsForm = this.fb.group({
          image: '',
          username: '',
          bio: '',
          email: '',
          password: ''
      });

    }

  ngOnInit() {
  }
  
  onSaveData() {
      this.dataStorageService.saveUsers()
        .subscribe(
          (response: Response) => {
            console.log(response);
          }
        );
        this.alertService.showToaster('Your settings are saved');
  }
  
  onFetchData() {
    this.dataStorageService.getUsers();
    this.alertService.showToaster('Data is refreshed');
  }
  
  onLogout() {
    this.authService.logout();
    this.alertService.showToaster('Logout succesful');
  }

}
