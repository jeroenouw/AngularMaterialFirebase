// Modules 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UsersRouting } from './users.routing'

import { AppMaterialModule } from './../../app.material.module';

// Components
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
import { PhoneSigninComponent } from './phone-signin/phone-signin.component';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    PhoneSigninComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppMaterialModule,
    UsersRouting
  ],
  providers: [

  ],
  exports: [
    SignupComponent,
    SigninComponent,
    PhoneSigninComponent
  ]
})
export class AuthModule {
}
