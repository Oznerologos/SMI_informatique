import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

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

import { AgmCoreModule } from '@agm/core';


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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAiGit6wi4ryhdr_x0n5OQZlYdHMov5pBg'
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
