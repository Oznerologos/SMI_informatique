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
import { UserDetailsComponent } from './board/user/user-details/user-details.component';
import { UserFormComponent } from './board/user/user-form/user-form.component';
import { UserListComponent } from './board/user/user-list/user-list.component';
import { ConfigDetailsComponent } from './board/config/config-details/config-details.component';
import { ConfigListComponent } from './board/config/config-list/config-list.component';

const routes: Routes = [
  {path: 'Config', component: ConfigComponent},
  {path: 'EZConfig', component: EzconfigComponent},
  {path: '', component: MainComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'registerLogin', component: LoginregisterComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'responseResetPassword', component: ResponseResetPasswordComponent},
  {
    path: 'userList',
    component: UserListComponent,
  },
  {
    path: 'userForm',
    children: [
      {
        path: '',
        component: UserFormComponent,
      },
      {
        path: ':id',
        component: UserFormComponent,
      },
    ],
  },
  {
    path: 'userDetails/:id',
    component: UserDetailsComponent,
  },
  {
    path: 'configList',
    component: ConfigListComponent,
  },
  {
    path: 'configDetails/:id',
    component: ConfigDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
