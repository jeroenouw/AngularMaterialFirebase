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
// import { PipesModule } from './pipes/pipes.module';
import { CarouselModule } from './components/carousel/carousel.module';

// Main
import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';

// Components
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { DialogComponent, DialogResultDialog } from './components/dialog/dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/not-found/not-found.component';
import { DatePipeComponent } from './pipes/date-pipe.component';
import { TitleCasePipeComponent } from './pipes/titlecase-pipe.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContactComponent,
    DialogComponent, DialogResultDialog,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    DatePipeComponent,
    TitleCasePipeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule, 
    MdToolbarModule, MdDialogModule, MaterialModule.forRoot(),
    FormsModule,
    HttpModule, 
    // AppRoutingModule,
    // PipesModule,
    // ComponentsModule
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
