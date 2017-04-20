import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ContactComponent } from'./components/contact/contact.component'
import { PageNotFoundComponent } from './components/not-found/not-found.component';


const appRoutes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

// Don't declare components here
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}