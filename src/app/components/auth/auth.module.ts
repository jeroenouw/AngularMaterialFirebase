// Modules 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
         MdToolbarModule, MdDialogModule, MaterialModule } from '@angular/material';

// Components
import { SignupComponent } from '../auth/signup/signup.component';
import { SigninComponent } from '../auth/signin/signin.component';

// Services
import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from '../auth/auth-guard.service';
import { AlertService } from '../auth/alert.service';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
    MdToolbarModule, MdDialogModule, MaterialModule.forRoot(),
  ],
  providers: [
    AuthService, 
    AuthGuardService,
    AlertService
  ],
  exports: [
    SignupComponent,
    SigninComponent
  ]
})
export class AuthModule { 
}
 