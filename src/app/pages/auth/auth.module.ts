// Modules 3rd party
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatProgressBarModule,
         MatCardModule, MatIconModule } from '@angular/material';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

// Components
import { AuthComponent } from './auth.component';
import { PhoneSigninComponent } from './phone-signin/phone-signin.component';

@NgModule({
  declarations: [
    AuthComponent,
    PhoneSigninComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatButtonModule, MatInputModule, MatProgressBarModule,
    MatCardModule, MatIconModule,
    NgxAuthFirebaseUIModule
  ],
  providers: [
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    AuthComponent,
    PhoneSigninComponent
  ]
})
export class AuthModule {
}
