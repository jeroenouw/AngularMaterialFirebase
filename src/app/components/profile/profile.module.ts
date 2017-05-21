// Modules 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
         MdToolbarModule, MdDialogModule, MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
    MdToolbarModule, MdDialogModule, MaterialModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    ProfileComponent,
    ProfileSettingsComponent
  ]
})
export class ProfileModule { 
}
 