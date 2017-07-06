// Modules 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { BackgroundNormalComponent } from './background-normal/background-normal.component';
import { BackgroundSlantComponent } from './background-slant/background-slant.component';
import { BackgroundEmptyComponent } from './background-empty/background-empty.component';
import { BackgroundEmailComponent } from './background-email/background-email.component';

@NgModule({
  declarations: [
    BackgroundNormalComponent,
    BackgroundSlantComponent,
    BackgroundEmptyComponent,
    BackgroundEmailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackgroundNormalComponent,
    BackgroundSlantComponent,
    BackgroundEmptyComponent,
    BackgroundEmailComponent
  ]
})
export class BackgroundsModule {
}
