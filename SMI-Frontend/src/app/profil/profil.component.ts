import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  formGroup: FormGroup;
  idUser = null;
  dataUser = null;
  existUser: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, 
    private adminService: AdminService,
    private router: Router
    ) {
      if (localStorage.getItem('token')) {
        this.idUser = this.authService.getUserId();
      }
    }

  ngOnInit(): void {    
    this.existUser = false;
    if (this.idUser) {
      this.adminService.getUser(this.idUser).subscribe((res) => {
        this.dataUser = res;
        this.existUser = true;
        this.initFormGroup();
      });
    }
  }

  initFormGroup() {
    this.formGroup = this.formBuilder.group({
      id: [this.dataUser ? this.dataUser.id : null],
      firstname: [this.dataUser ? this.dataUser.firstname : null, [Validators.required]],
      lastname: [this.dataUser ? this.dataUser.lastname : null, [Validators.required]],
      mail: [this.dataUser ? this.dataUser.mail : null, [Validators.required, Validators.email]],
      password: [this.dataUser ? this.dataUser.password : null, [Validators.required, Validators.minLength(8)]],
      phone: [this.dataUser ? this.dataUser.phone : null, [Validators.required]],
      role: [this.dataUser ? this.dataUser.role : null]
    })
  }

  public onSubmit() {
    if (this.formGroup.valid) {
      if (this.formGroup.get('id').value != null) {
        this.adminService.updateUser(this.formGroup.value).subscribe(
          (res) => {
            console.log(res);
            // this.toastr.success(`User modifié`, 'Success');
            this.router.navigateByUrl('/');
          },
          (err) => {
            console.log(err);
            // this.toastr.error(
            //   "Une erreur est survenue lors de l'envoi du formulaire de modification du user.",
            //   'Error occured'
            // );
          }
        );
      }
    } else {
      console.log('error formulaire non valide');
      // this.toastr.error(
      //   'Veuillez completer le formulaire correctement',
      //   'Error'
      // );
    }
  }
}
