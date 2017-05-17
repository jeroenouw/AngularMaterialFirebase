import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { PageNotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from'./components/home/home.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';

import { AuthGuardService } from './components/auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch : 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: SigninComponent },
];

// Don't declare components here
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// export const routingComponents = [AppComponent, SignupComponent, SigninComponent]; 
