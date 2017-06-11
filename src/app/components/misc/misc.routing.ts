import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscComponent } from './misc.component';

const miscRoutes: Routes = [
  { path: 'misc', component: MiscComponent }
];

@NgModule({
  imports: [RouterModule.forChild(miscRoutes)],
  exports: [RouterModule]
})

export class MiscRoutingModule {

}
