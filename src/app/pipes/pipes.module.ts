// Modules 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { YearPipeComponent } from'./year-pipe.component'
import { DatePipeComponent } from'./date-pipe.component'
import { TitleCasePipeComponent } from'./titlecase-pipe.component'

@NgModule({
  declarations: [
    YearPipeComponent,
    DatePipeComponent,
    TitleCasePipeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    YearPipeComponent,
    DatePipeComponent,
    TitleCasePipeComponent 
  ]
})
export class PipesModule {
}
