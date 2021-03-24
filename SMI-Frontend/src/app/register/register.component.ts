import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    mail: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  public error: string;
  submitted = false;

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
      this.auth.prenom = this.formRegister.controls['firstname'].value;
      this.auth.nom = this.formRegister.controls['lastname'].value;
      this.auth.register(this.formRegister.value).subscribe(
        data =>{
          if(data.access_token != null || data.access_token != undefined){
            localStorage.setItem('token', data.access_token);
            this.auth.userRole("none");
            this.router.navigateByUrl('/');
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

}
