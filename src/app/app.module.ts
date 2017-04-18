import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule } from '@angular/material';
import 'hammerjs';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routing } from "./app.routing";

import { AppComponent } from './app.component';
import { ContactComponent } from'./contact/contact.component'
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
