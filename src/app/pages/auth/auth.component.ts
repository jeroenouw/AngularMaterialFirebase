import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '@shared';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  public loading: boolean = false;

  constructor(private authService: AuthService) {}

  public onSuccess(): void {
    return this.authService.onSuccess();
  }

}
