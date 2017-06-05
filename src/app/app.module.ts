// Modules 3rd party
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
         MdToolbarModule, MdDialogModule, MaterialModule } from '@angular/material';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Modules
import { MessagesModule } from './components/messages/messages.module';
import { PipesModule } from './pipes/pipes.module';
import { BlocksModule } from './components/blocks/blocks.module';
import { AuthModule } from './components/auth/auth.module';
import { BackgroundsModule } from './components/backgrounds/backgrounds.module';
import { ProfileModule } from './components/profile/profile.module';
// import { CarouselModule } from './components/carousel/carousel.module';

// Shared
import {
  FooterComponent,
  HeaderComponent,
  UserService,
  DataStorageService,
  AlertService,
  AuthGuardService,
  AuthService
} from './components/shared';

// Main
import { AppComponent } from './app.component';
import { AppRoutingModule,
         // routingComponents
         } from './app.routing';

// Components
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { DialogComponent, DialogResultDialogComponent } from './components/misc/dialog.component';
import { PageNotFoundComponent } from './components/not-found/not-found.component';
import { EmailMeComponent } from './components/email-me/email-me.component';
import { MiscComponent } from './components/misc/misc.component';
import { ChangeDetectionComponent } from './components/misc/change-detection.component';
import { ChangeDetailComponent } from './components/misc/change-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    DialogComponent, DialogResultDialogComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    EmailMeComponent,
    MiscComponent,
    ChangeDetectionComponent,
    ChangeDetailComponent
    // routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
    MdToolbarModule, MdDialogModule, MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MessagesModule,
    PipesModule,
    BlocksModule,
    AuthModule,
    BackgroundsModule,
    ProfileModule
    // CarouselModule
  ],
  providers: [
    UserService,
    DataStorageService,
    AlertService,
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
