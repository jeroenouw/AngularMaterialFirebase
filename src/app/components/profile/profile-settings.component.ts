import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Response } from '@angular/http';

import * as firebase from 'firebase';
import { FileUploadModule } from 'primeng/primeng';

import { User, Profile, DataStorageService, AuthService, AlertService, UserService } from '../shared';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
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
    private userService: UserService,
    private fb: FormBuilder) {

      this.settingsForm = this.fb.group({
          image: '',
          username: '',
          bio: '',
          email: '',
          password: ''
      });
    
    }

    uploadedFiles: any[] = [];

  // Upload files in progress
  onUpload(event) {
      for(let file of event.files) {
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref().child('users/' + uid + '/image/').push();
      }
  }

  ngOnInit() {
    (<any>Object).assign(this.user, this.dataStorageService.getUser());
    this.settingsForm.patchValue(this.user);
  }


  onUpdateUser(values: Object) {
    (<any>Object).assign(this.user, values);
  }

  onPasswordReset() {
    this.userService.sendUserPasswordResetEmail();
    this.alertService.showToaster('Reset password is sent to your email');
  }

  onSaveData() {
      this.onUpdateUser(this.settingsForm.value);

      this.dataStorageService.saveUser()
        .subscribe(
          (response: Response) => {
            console.log(response),
            err => {
        this.errors = err;
      };
          }
        );
    
      this.alertService.showToaster('Your settings are saved');
  }

  onFetchData() {
    this.dataStorageService.getUser();
    this.alertService.showToaster('Data is refreshed');
  }

  onLogout() {
    this.authService.logout();
    this.alertService.showToaster('Logout succesful');
  }

}
