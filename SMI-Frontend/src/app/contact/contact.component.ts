import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  formContact = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    number: ['', Validators.required],
    society: [''],
    mail: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  public error: string;
  submitted = false;
  submittedLog = false;

  constructor(
    private formBuilder: FormBuilder, 
    private auth: AuthService, 
    private router: Router
    )
  { }


  

  ngOnInit(): void {
    this.error = "";
  }

 
  submitContact(){
    this.submittedLog = true;

    //Verification de la validité du formulaire. 
    //Si non valide, stop fonction
    if (this.formContact.invalid) {
        return;
    }

    //Envoie du formulaire
    this.auth.login(this.formContact.value).subscribe(
      data =>{
        if(data.access_token != null || data.access_token != undefined){
          localStorage.setItem('token', data.access_token);
          this.router.navigate(['/']);
        }
      },
      err => {
        console.log(err);
        this.error ="Adresse mail incorrect";
      }
    )
  }

  //Get des différents inputs. 
  //Pour savoir s'ils sont vide ou non conforme au format

  get firstname() {
    return this.formContact.get('firstname');
  }

  get lastname() {
    return this.formContact.get('lastname');
  }

  get society() {
    return this.formContact.get('societé');
  }
  get number() {
    return this.formContact.get('numéro');
  }
  get mail() {
    return this.formContact.get('mail');
  }

  get message() {
    return this.formContact.get('message');
  }

}

