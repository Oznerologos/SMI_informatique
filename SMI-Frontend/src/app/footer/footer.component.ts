import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public router: Router) { }

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
