import { importExpr } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigComponent } from "./config/config.component";
import { EzconfigComponent } from "./ezconfig/ezconfig.component";
import { MainComponent } from "./main/main.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component"; 
import { LoginregisterComponent } from './loginregister/loginregister.component';
import { ProfilComponent } from './profil/profil.component';
import { ResponseResetPasswordComponent } from './response-reset-password/response-reset-password.component';

const routes: Routes = [
  {path: 'Config', component: ConfigComponent},
  {path: 'EZConfig', component: EzconfigComponent},
  {path: '', component: MainComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'registerLogin', component: LoginregisterComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'responseResetPassword', component: ResponseResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
