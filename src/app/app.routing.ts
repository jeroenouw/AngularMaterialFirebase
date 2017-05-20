import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './components/not-found/not-found.component';

import { HomeComponent } from'./components/home/home.component';
import { AboutMeComponent } from'./components/about-me/about-me.component';
import { ContactComponent } from'./components/contact/contact.component';


import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileSettingsComponent } from './components/profile/profile-settings/profile-settings.component';
import { MessagesComponent } from './components/messages/messages.component';

import { AuthGuardService } from './components/auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch : 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: SigninComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile-settings', component: ProfileSettingsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '**', component: PageNotFoundComponent },
];

// Don't declare components here
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
