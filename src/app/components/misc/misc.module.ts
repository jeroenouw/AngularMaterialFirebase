import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule, MatInputModule, MatNativeDateModule, 
         MatSlideToggleModule, MatStepperModule, MatTooltipModule, MatSidenavModule, 
         MatTableModule, MatCardModule, MatDatepickerModule } from '@angular/material';

// import { CdkTableModule } from '@angular/cdk';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../../pipes/pipes.module';

// import { MiscRoutingModule } from './misc.routing';

import { CarouselComponent } from './carousel/carousel.component';
import { MiscComponent } from './misc.component';
import { ChangeDetectionComponent } from './change/change-detection.component';
import { ChangeDetailComponent } from './change/change-detail.component';
import { VirtRealComponent } from './virtual-reality/virtreal.component';
import { TableComponent } from './table/table.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  declarations: [
    CarouselComponent,
    MiscComponent,
    ChangeDetectionComponent,
    ChangeDetailComponent,
    VirtRealComponent,
    TableComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatNativeDateModule, 
    MatSlideToggleModule, MatStepperModule, MatTooltipModule, MatSidenavModule, 
    MatTableModule, MatCardModule, MatDatepickerModule,
    FormsModule, ReactiveFormsModule,
    PipesModule,
    // MiscRoutingModule
  ],
  exports: [
    CarouselComponent,
    MiscComponent,
    ChangeDetectionComponent,
    ChangeDetailComponent,
    VirtRealComponent,
    TableComponent,
    StepperComponent
  ]
})

export class MiscModule {
}
