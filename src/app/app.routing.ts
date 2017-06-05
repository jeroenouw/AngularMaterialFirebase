import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './components/not-found/not-found.component';

import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { MiscComponent } from './components/misc/misc.component';

import { SignupComponent } from './components/auth/signup.component';
import { SigninComponent } from './components/auth/signin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileSettingsComponent } from './components/profile/profile-settings.component';
import { MessagesComponent } from './components/messages/messages.component';

import { AuthGuardService } from './components/shared';

const appRoutes: Routes = [
  
  // Public pages
  { path: '', redirectTo: '/home', pathMatch : 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'misc', component: MiscComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: SigninComponent },

  // Protected pages
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'profile-settings', component: ProfileSettingsComponent, canActivate: [AuthGuardService] },
  { path: 'messages', component: MessagesComponent, canActivate: [AuthGuardService] },
  // { path: 'lazy-loading-in-progress', loadChildren: './components/auth/auth.moduleh#AuthModule' },
  { path: '**', component: PageNotFoundComponent } 
];

// Don't declare components here
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
