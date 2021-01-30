import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-response-reset-password',
  templateUrl: './response-reset-password.component.html',
  styleUrls: ['./response-reset-password.component.css']
})
export class ResponseResetPasswordComponent implements OnInit {
  formGroup: FormGroup;
  private resettoken: string = null;

  error = "";
  submitted = false;

  constructor(private formBuilder: FormBuilder,private authService: AuthService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.error = "";

    this.formGroup = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });

    // Recuperation du token passé en parametre dans le lien du mail afin de l'envoyer au back
    this.route.queryParams.subscribe(
      (res) => {
        //console.log(res);
        if (res.resettoken) {
          this.resettoken = res.resettoken;
        }
      },
      (err) => {
        console.log(err);
      }
    );

    // Détruit les variables localStorage au chargement de la page
    window.onload = () => {
      window.localStorage.clear();
    };
  }

  public onSubmit() {
    this.submitted = true;

    //Verification de la validité du formulaire. 
    //Si non valide, stop fonction
    if (this.formGroup.invalid) {
        return;
    }

    if (this.formGroup.valid &&this.formGroup.get('password').value == this.formGroup.get('confirmPassword').value) {
      
      this.authService.recover(this.resettoken, this.formGroup.get('password').value).subscribe(
        (res) => {
          alert(`Mot de passe modifié avec succès`);
          this.router.navigateByUrl('/registerLogin');
        },
        (err) => {
          alert('Erreur : Mot de passe déjà modifié');
          this.router.navigateByUrl('/registerLogin');
        }
      );
    } else {
      this.error = "Les deux mots de passe saisis ne correspondent pas";
    }
  }

  get password() {
    return this.formGroup.get('password');
  }
}
