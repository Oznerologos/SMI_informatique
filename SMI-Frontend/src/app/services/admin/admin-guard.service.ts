import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../admin.service';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {

  constructor(public router: Router, private auth: AuthService, private admin: AdminService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean> | Promise<boolean> | boolean {
    var isAdminIn;
    
    if(this.auth.isAdmin == false){
      isAdminIn = false;
      console.log('Vous n\'êtes pas admin');
      this.router.navigate([""]);
    }else{
      isAdminIn = true;
    }

    return isAdminIn;
  }
}
