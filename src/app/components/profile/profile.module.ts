// Modules 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
         MdToolbarModule, MdDialogModule, MaterialModule } from '@angular/material';

// Components
import { ProfileComponent } from './profile.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileSettingsComponent
  ],
  imports: [
    CommonModule,
    MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
    MdToolbarModule, MdDialogModule, MaterialModule
  ],
  exports: [
    ProfileComponent,
    ProfileSettingsComponent
  ]
})
export class ProfileModule { 
}
 