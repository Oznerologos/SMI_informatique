import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.css']
})

export class LoginregisterComponent implements OnInit {

  formRegister = this.formBuilder.group({
    firstname: '',
    lastname: '',
    mail: '',
    phone: '',
    password: ''
  });

  formLogin = this.formBuilder.group({
    mail: '',
    password: ''
  });

  public error: string;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.error = "";
  }

  submitRegister(){
    console.log(this.formRegister.value);

    this.auth.register(this.formRegister).subscribe(
      data =>{
        localStorage.setItem('token', data.token);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    )
  }

  submitLogin(){
    console.log(this.formLogin.value);

    this.auth.login(this.formLogin).subscribe(
      data =>{
        localStorage.setItem('token', data.token);
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        this.error ="Adresse mail ou mot de passe incorrect";
      }
    )
  }

  resetPassword(){
    var mail = prompt("Entrez votre adresse mail");
    var tokenUser = localStorage.getItem('token');
    -
    this.auth.resetPassword(tokenUser, mail).subscribe(
      data =>{
        localStorage.setItem('token', data.token);
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        this.error ="Adresse mail ou mot de passe incorrect";
      }
    )
  }

  formulaireInscription(){
    document.getElementById("register").style.display = "inline";
    document.getElementById("login").style.display = "none";
    this.error = "";
  }

  retour(){
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "inline";
    this.error = "";
  }
}
