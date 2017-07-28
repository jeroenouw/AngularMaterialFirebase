import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertService, UserService } from '../shared';

@Component({
  selector: 'app-email-me',
  templateUrl: './email-me.component.html',
  styleUrls: ['./email-me.component.scss']
})
export class EmailMeComponent implements OnInit {
  constructor(
    private alertService: AlertService,
    private userService: UserService) {

    }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
   const email = form.value.email;
   this.userService.keepInTouch(email);
  }
}
