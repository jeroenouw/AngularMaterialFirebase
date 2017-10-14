// Modules 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule,
         MatToolbarModule, MatCardModule, MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

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
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule,
    MatToolbarModule, MatCardModule, MatDialogModule,
    FormsModule
  ],
  exports: [
    ProfileComponent,
    ProfileSettingsComponent
  ]
})
export class ProfileModule {
}
