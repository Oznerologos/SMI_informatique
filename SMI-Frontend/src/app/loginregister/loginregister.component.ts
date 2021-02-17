import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.css']
})

export class LoginregisterComponent implements OnInit {

  formRegister = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    mail: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  formLogin = this.formBuilder.group({
    mail: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  public error: string;
  public isAdmin: boolean;
  submitted = false;
  submittedLog = false;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.error = "";
  }

  submitRegister(){
    this.submitted = true;

    //Verification de la validité du formulaire. 
    //Si non valide, stop fonction
    if (this.formRegister.invalid) {
        return;
    }

    //Vérification du mot de passe
    var psw = (<HTMLInputElement>document.getElementById("passwordRegister")).value;
    var pswRepeat = (<HTMLInputElement>document.getElementById("passwordVerifRegister")).value;
    
    if(psw == pswRepeat && psw !=''){
      //Envoie du formulaire
      this.auth.register(this.formRegister.value).subscribe(
        data =>{
          if(data.access_token != null || data.access_token != undefined){
            localStorage.setItem('token', data.access_token);
            this.auth.userRole("none");
            this.router.navigate(['/']);
          }
        },
        err => {
          console.log(err);
          this.error = err.error.text;
        }
      )
    }else{
      this.error = "Les deux mots de passe saisis ne correspondent pas";
    }
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

  formulaireInscription(){
    document.getElementById("register").style.display = "inline";
    document.getElementById("login").style.display = "none";
    this.error = "";
    this.submitted = false;
    this.submittedLog = false;
  }

  retour(){
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "inline";
    this.error = "";
    this.submitted = false;
    this.submittedLog = false;
  }



  //Get des différents inputs. 
  //Pour savoir s'ils sont vide ou non conforme au format

  get firstname() {
    return this.formRegister.get('firstname');
  }

  get lastname() {
    return this.formRegister.get('lastname');
  }

  get mail() {
    return this.formRegister.get('mail');
  }

  get phone() {
    return this.formRegister.get('phone');
  }

  get password() {
    return this.formRegister.get('password');
  }

  get mailLog() {
    return this.formLogin.get('mail');
  }

  get passwordLog() {
    return this.formLogin.get('password');
  }
}
