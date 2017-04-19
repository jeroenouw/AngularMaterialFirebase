// Modules 3rd party
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule, 
         MdToolbarModule, MaterialModule } from '@angular/material';
import 'hammerjs';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Modules 
import { BackgroundModule } from './background/background.module' ;

// Main
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Components
import { ContactComponent } from'./contact/contact.component'
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";
import { PageNotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule, MdToolbarModule, MaterialModule.forRoot(),
    FormsModule,
    HttpModule, 
    AppRoutingModule,
    BackgroundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
