// Modules 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './../../app.material.module';

// Components
import { MessagesComponent } from './messages.component';

// Services
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppMaterialModule,
    FormsModule
  ],
  providers: [
    MessageService
  ],
  exports: [
    MessagesComponent
  ]
})
export class MessagesModule {
}
