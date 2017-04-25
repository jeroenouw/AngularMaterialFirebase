// Modules 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
         MdToolbarModule, MdDialogModule, MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

// Components
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';

// Services
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    SenderComponent,
    ReceiverComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
    MdToolbarModule, MdDialogModule, MaterialModule.forRoot(),
    FormsModule
  ],
  providers: [
    MessageService
  ],
  exports: [
    SenderComponent,
    ReceiverComponent
  ]
})
export class MessagesModule {
}
