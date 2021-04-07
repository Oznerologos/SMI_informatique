import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigComponent } from "./config/config.component";
import { EzconfigComponent } from "./ezconfig/ezconfig.component";
import { MainComponent } from "./main/main.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component"; 
import { ProfilComponent } from './profil/profil.component';
import { ResponseResetPasswordComponent } from './response-reset-password/response-reset-password.component';
import { UserDetailsComponent } from './board/user/user-details/user-details.component';
import { UserFormComponent } from './board/user/user-form/user-form.component';
import { UserListComponent } from './board/user/user-list/user-list.component';
import { ConfigDetailsComponent } from './board/config/config-details/config-details.component';
import { ConfigListComponent } from './board/config/config-list/config-list.component';
import { ConfigFormComponent } from './board/config/config-form/config-form.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { AdminGuardService } from './services/admin/admin-guard.service';

const routes: Routes = [
  {
    path: 'Config',     
    children: [
      {
        path: '', canActivate: [AuthGuardService],
        component: ConfigComponent,
      },
      {
        path: ':id', canActivate: [AuthGuardService],
        component: ConfigComponent,
      },
    ]
  },
  {path: 'EZConfig', canActivate: [AuthGuardService], component: EzconfigComponent},
  {path: '', component: MainComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'profil', canActivate: [AuthGuardService], component: ProfilComponent},
  {path: 'responseResetPassword', component: ResponseResetPasswordComponent},
  {
    path: 'userList', canActivate: [AuthGuardService, AdminGuardService],
    component: UserListComponent,
  },
  {
    path: 'userForm',
    children: [
      {
        path: '', canActivate: [AuthGuardService, AdminGuardService],
        component: UserFormComponent,
      },
      {
        path: ':id', canActivate: [AuthGuardService, AdminGuardService],
        component: UserFormComponent,
      },
    ],
  },
  {
    path: 'userDetails/:id', canActivate: [AuthGuardService, AdminGuardService],
    component: UserDetailsComponent,
  },
  {
    path: 'configList', canActivate: [AuthGuardService, AdminGuardService],
    component: ConfigListComponent,
  },
  {
    path: 'configDetails/:id', canActivate: [AuthGuardService],
    component: ConfigDetailsComponent,
  },
  {
    path: 'configForm',
    children: [
      {
        path: '', canActivate: [AuthGuardService, AdminGuardService],
        component: ConfigFormComponent,
      },
      {
        path: ':id', canActivate: [AuthGuardService, AdminGuardService],
        component: ConfigFormComponent,
      },
    ],
  },
  {
    path: 'admin', canActivate: [AuthGuardService, AdminGuardService],
    component: AdminComponent,
  },
  {path: 'newsletter', component: NewsletterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
