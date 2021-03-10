import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginregisterComponent } from '../loginregister/loginregister.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  isRouteLogin() {
    return this.router.url === '/login';
  }

  isRouteRegister() {
    return this.router.url === '/register';
  }
}
