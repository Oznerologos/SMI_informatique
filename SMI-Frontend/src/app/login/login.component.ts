import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = this.formBuilder.group({
    mail: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  public error: string;
  submittedLog = false;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.error = "";
  }

  submitLogin(){
    this.submittedLog = true;

    //Verification de la validité du formulaire. 
    //Si non valide, stop fonction
    if (this.formLogin.invalid) {
        return;
    }

    //Envoie du formulaire
    this.auth.login(this.formLogin.value).subscribe(
      data =>{
        if(data.access_token != null || data.access_token != undefined){
          localStorage.setItem('token', data.access_token);
          this.auth.roleUser().subscribe(
            data =>{
              this.auth.userRole(data.role);
            }
          );
          this.router.navigate(['/']);
        }
      },
      err => {
        console.log(err);
        this.error ="Adresse mail ou mot de passe incorrect";
      }
    )
  }

  resetPassword(){
    var mailUser = prompt("Entrez votre adresse mail");
    var mailEnvoie = {mail: mailUser};

    //Envoie du formulaire
    this.auth.resetPassword(mailEnvoie).subscribe(
      data =>{
        alert('Email envoyé');
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        this.error = "L'email rentré ne possède pas de compte";
      }
    )
  }

  get mailLog() {
    return this.formLogin.get('mail');
  }

  get passwordLog() {
    return this.formLogin.get('password');
  }
}
