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
import { UserListComponent } from './board/user/user-list/user-list.component';
import { UserFormComponent } from './board/user/user-form/user-form.component';
import { UserDetailsComponent } from './board/user/user-details/user-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfigDetailsComponent } from './board/config/config-details/config-details.component';
import { ConfigFormComponent } from './board/config/config-form/config-form.component';
import { ConfigListComponent } from './board/config/config-list/config-list.component';

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
    ProfilComponent,
    UserListComponent,
    UserFormComponent,
    UserDetailsComponent,
    ConfigDetailsComponent,    
    ConfigFormComponent,
    ConfigListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
