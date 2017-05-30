// Modules 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
         MdToolbarModule, MdDialogModule, MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

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
    MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
    MdToolbarModule, MdDialogModule, MaterialModule,
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
