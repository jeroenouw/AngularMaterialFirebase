// Modules 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule } from '@angular/material';

// Components
import { CardBlockComponent } from './card-block/card-block.component';
import { FirstBlockComponent } from './first-block/first-block.component';
import { SecondBlockComponent } from './second-block/second-block.component';
import { ThirdBlockComponent } from './third-block/third-block.component';

@NgModule({
  declarations: [
    CardBlockComponent,
    FirstBlockComponent,
    SecondBlockComponent,
    ThirdBlockComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule, MatCardModule
  ],
  exports: [
    CardBlockComponent,
    FirstBlockComponent,
    SecondBlockComponent,
    ThirdBlockComponent
  ]
})
export class BlocksModule {
}
