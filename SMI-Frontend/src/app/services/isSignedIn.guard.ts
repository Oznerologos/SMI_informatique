import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})

export class IsSignedInGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  async isSignedIn() {
    if (localStorage.getItem('token') && this.authService.getUserMail()) {
      var item = await this.authService.verifyToken(item).catch(Error);
      if (JSON.parse(this.authService.getUserMail()) == item.mail) {
        return true;
      } else {
        this.authService.logoutUser();
      }
    } else {
      this.authService.logoutUser();
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isSignedIn();
  }
}

@Injectable({
  providedIn: 'root',
})

export class IsNotSignedInGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  async isNotSignedIn() {
    if (localStorage.getItem('token') && this.authService.getUserMail()) {
      var item = await this.authService.verifyToken(item).catch(Error);
      if (JSON.parse(this.authService.getUserMail()) == item.mail) {
        this.router.navigateByUrl('/registerLogin');
      } else {
        this.authService.logoutUser();
      }
    } else {
      return true;
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isNotSignedIn();
  }
}