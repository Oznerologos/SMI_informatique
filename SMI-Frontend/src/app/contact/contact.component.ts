import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
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
    phone: ['', Validators.required],
    society: [''],
    mail: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });
  

  constructor( private formBuilder: FormBuilder, private router: Router, private authService: AuthService ) { }


  ngOnInit(): void {
  }
 
  submitContact(){
    if (this.formContact.valid) {
        this.authService.sendMail(this.formContact.value).subscribe(
          (res) => {
            console.log(res);
            this.router.navigateByUrl('/');
          },
          (err) => {
            console.log(err);
          }
        );
      }else {
        console.log('error');
      }
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