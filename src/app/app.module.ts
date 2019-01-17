// Modules 3rd party
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSnackBarModule,
         MatToolbarModule, MatDialogModule, MatSidenavModule, MatNativeDateModule,
         MatCardModule, MatTabsModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

// Modules
import { BlocksModule } from './components/blocks/blocks.module';
import { AuthModule } from './pages/auth/auth.module';
import { BackgroundsModule } from './components/backgrounds/backgrounds.module';
import { ProfileModule } from './pages/profile/profile.module';
import { MiscModule } from './components/misc/misc.module';
import { PipesModule } from '@shared/pipes/pipes.module';

// Shared
import {
  FooterComponent,
  HeaderComponent,
  UserService,
  AlertService,
  AuthGuardService,
  AuthService,
  WindowService
} from '@shared';

// Main
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/not-found/not-found.component';

// Components
import { EmailMeComponent } from './components/email-me/email-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    EmailMeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSnackBarModule,
    MatToolbarModule, MatDialogModule, MatSidenavModule, MatNativeDateModule,
    MatCardModule, MatTabsModule, MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    PipesModule,
    BlocksModule,
    AuthModule,
    BackgroundsModule,
    ProfileModule,
    MiscModule,
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: 'AIzaSyBUYZcc_HKi1TckbZPpSjSkxyFvml3Is0A',
      authDomain: 'angular4materialdesign.firebaseapp.com',
      databaseURL: 'https://angular4materialdesign.firebaseio.com',
      projectId: 'angular4materialdesign',
      storageBucket: 'angular4materialdesign.appspot.com',
      messagingSenderId: '136985605193'
  })
  ],
  providers: [
    UserService,
    AlertService,
    AuthGuardService,
    AuthService,
    WindowService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
