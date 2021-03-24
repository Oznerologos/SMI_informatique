import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginregisterComponent } from '../loginregister/loginregister.component';
import { AdminService } from '../services/admin.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  idUser = null;
  dataUser = null;
  existUser: boolean;

  constructor(
    public authService: AuthService,
    private adminService: AdminService,
    public router: Router
    ) {     
    if (localStorage.getItem('token')) {
    this.idUser = this.authService.getUserId();
    }
  }

  ngOnInit(): void {
    this.existUser = false;
    if (this.idUser) {
      this.adminService.getUser(this.idUser).subscribe((res) => {
        this.dataUser = res;
        this.existUser = true;
      });
    };
  }

  isRouteLogin() {
    return this.router.url === '/login';
  }

  isRouteRegister() {
    return this.router.url === '/register';
  }

  isRoutePassword() {
    return this.router.url.startsWith('/responseResetPassword');
  }

  isRouteAdmin(){
    return this.router.url === '/admin';
  }

  isRouteAdminUser(){
    return this.router.url === '/userList';
  }

  isRouteAdminUserDetail(){
    return this.router.url.startsWith('/userDetails');
  }

  isRouteAdminConfig(){
    return this.router.url === '/configList';
  }

  isRouteAdminConfigDetail(){
    return this.router.url.startsWith('/configDetails');
  }
}
