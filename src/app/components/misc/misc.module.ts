import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdButtonModule, MdCheckboxModule, MdInputModule, MdNativeDateModule, MdSlideToggleModule,
         MdTooltipModule, MdSidenavModule, MdTableModule, MaterialModule } from '@angular/material';

import { CdkTableModule } from '@angular/cdk';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../../pipes/pipes.module';

// import { MiscRoutingModule } from './misc.routing';

import { CarouselComponent } from './carousel/carousel.component';
import { MiscComponent } from './misc.component';
import { ChangeDetectionComponent } from './change/change-detection.component';
import { ChangeDetailComponent } from './change/change-detail.component';
import { VirtRealComponent } from './virtual-reality/virtreal.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    CarouselComponent,
    MiscComponent,
    ChangeDetectionComponent,
    ChangeDetailComponent,
    VirtRealComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MdButtonModule, MdCheckboxModule, MdInputModule, MdNativeDateModule, MdSlideToggleModule,
    MdTooltipModule, MdSidenavModule, MdTableModule, MaterialModule,
    CdkTableModule,
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
    TableComponent
  ]
})

export class MiscModule {
}
