import { Component } from '@angular/core';
import { AdminService } from './services/admin.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SMI-Frontend';

  constructor(private auth: AuthService, private admin: AdminService) { }
  ngOnInit(): void {

    if(localStorage.getItem('token') != null){
      var idPersonne = this.auth.getUserId();
      this.admin.getUser(idPersonne).subscribe((res) =>{
        this.auth.userRole(res.role);
        this.auth.prenom = res.firstname;
        this.auth.nom = res.lastname;
      });
    }
  }
}