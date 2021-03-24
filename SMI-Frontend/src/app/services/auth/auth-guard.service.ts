import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean> | Promise<boolean> | boolean {
    var isLoggedIn;

    if(localStorage.getItem('token') == null){
      isLoggedIn = false;
      console.log('Vous n\'êtes pas connecté(e)s');
      this.router.navigate([""]);
    }else{
      isLoggedIn = true;
    }

    return isLoggedIn;
  }
}
