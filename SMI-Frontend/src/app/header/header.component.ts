import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) {     
  }

  ngOnInit(): void {
    
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
