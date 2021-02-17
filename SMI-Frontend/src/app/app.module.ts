import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AlertModule } from "@full-fledged/alerts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConfigComponent } from './config/config.component';
import { EzconfigComponent } from './ezconfig/ezconfig.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginregisterComponent } from './loginregister/loginregister.component';
import { ResponseResetPasswordComponent } from './response-reset-password/response-reset-password.component';
import { AuthService } from './services/auth.service';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConfigComponent,
    EzconfigComponent,
    MainComponent,
    ContactComponent,
    AboutComponent,
    LoginregisterComponent,
    ResponseResetPasswordComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, positionX: 'right'})
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
