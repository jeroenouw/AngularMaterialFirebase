// Modules 3rd party
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule, 
         MdToolbarModule, MdDialogModule, MaterialModule } from '@angular/material';
import 'hammerjs';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Modules 
// import { ComponentsModule } from './components/components.module';

// Main
import { AppComponent } from './app.component';
//import { AppRoutingModule } from './app-routing.module';

// Components
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { DialogComponent, DialogResultDialog } from './components/dialog/dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/not-found/not-found.component';
import { DatePipeComponent } from './pipes/date-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContactComponent,
    DialogComponent, DialogResultDialog,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    DatePipeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule, 
    MdToolbarModule, MdDialogModule, MaterialModule.forRoot(),
    FormsModule,
    HttpModule, 
    //AppRoutingModule,
    //ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
