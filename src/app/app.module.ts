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
// import { CarouselModule } from './components/carousel/carousel.module';
// import { BlocksModule } from './components/blocks/blocks.module';
// import { BackgroundsModule } from './components/backgrounds/backgrounds.module';

// Services
import { MessageService } from './components/messages/message.service';
import { AuthService } from './components/auth/auth.service';
import { AuthGuard } from './components/auth/auth-guard.service';
// import { DataStorageService } from './shared/data-storage.service';

// Main
import { AppComponent } from './app.component';
import { AppRoutingModule,
         // routingComponents
         } from './app.routing';

// Components
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import './components/contact/contact';
import { DialogComponent, DialogResultDialogComponent } from './components/dialog/dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/not-found/not-found.component';
import { DatePipeComponent } from './pipes/date-pipe.component';
import { TitleCasePipeComponent } from './pipes/titlecase-pipe.component';
import { EmailMeComponent } from './components/email-me/email-me.component';

import { BackgroundNormalComponent } from './components/backgrounds/background-normal/background-normal.component';
import { BackgroundSlantComponent } from './components/backgrounds/background-slant/background-slant.component';
import { BackgroundEmptyComponent } from './components/backgrounds/background-empty/background-empty.component';
import { BackgroundEmailComponent } from './components/backgrounds/background-email/background-email.component';

import { CardBlockComponent } from './components/blocks/card-block/card-block.component';
import { FirstBlockComponent } from './components/blocks/first-block/first-block.component';
import { SecondBlockComponent } from './components/blocks/second-block/second-block.component';
import { ThirdBlockComponent } from './components/blocks/third-block/third-block.component';

import { SenderComponent } from './components/messages/sender/sender.component';
import { ReceiverComponent } from './components/messages/receiver/receiver.component';

import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContactComponent,
    DialogComponent, DialogResultDialogComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    DatePipeComponent,
    TitleCasePipeComponent,
    EmailMeComponent,
    BackgroundNormalComponent,
    BackgroundSlantComponent,
    BackgroundEmptyComponent,
    BackgroundEmailComponent,
    CardBlockComponent,
    FirstBlockComponent,
    SecondBlockComponent,
    ThirdBlockComponent,
    SenderComponent,
    ReceiverComponent,
    SignupComponent,
    SigninComponent,
    // routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
    MdToolbarModule, MdDialogModule, MaterialModule.forRoot(),
    FormsModule,
    HttpModule,
    AppRoutingModule
    // PipesModule
    // ComponentsModule
    // CarouselModule
    // BackgroundsModule
  ],
  providers: [MessageService, AuthService, AuthGuard// ,DataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
