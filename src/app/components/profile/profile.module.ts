// Modules 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './../../app.material.module';

// Components
import { ProfileComponent } from './profile.component';
import { ProfileSettingsComponent } from './profile-settings.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileSettingsComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule
  ],
  exports: [
    ProfileComponent,
    ProfileSettingsComponent
  ]
})
export class ProfileModule {
}
