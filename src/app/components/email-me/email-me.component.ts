import { Component } from '@angular/core';
import { NgForm, FormBuilder, Validators, FormGroup  } from '@angular/forms';

import { UserService, EmailValidator } from '@shared';

@Component({
  selector: 'app-email-me',
  templateUrl: './email-me.component.html',
  styleUrls: ['./email-me.component.scss']
})
export class EmailMeComponent {
  public form: FormGroup;

  constructor(
    private userService: UserService,
    public formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])]
    });
  }

  public onSubmit(form: NgForm) {
    const email = form.value.email;
    return this.userService.keepInTouch(email);
  }
}
