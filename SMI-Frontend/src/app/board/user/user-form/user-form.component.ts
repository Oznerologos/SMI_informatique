import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  formGroup: FormGroup;
  idUser = null;
  dataUser = null;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    if (this.activedRoute.snapshot.paramMap.get('id')) {
      this.idUser = this.activedRoute.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void {
    if (this.idUser) {
      this.adminService.getUser(this.idUser).subscribe((res) => {
        this.dataUser = res;
        this.initFormGroup();
      });
    } else {
      this.initFormGroup();
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
            this.router.navigateByUrl('/userList');
          },
          (err) => {
            console.log(err);
            // this.toastr.error(
            //   "Une erreur est survenue lors de l'envoi du formulaire de modification du user.",
            //   'Error occured'
            // );
          }
        );
      } else {
        this.adminService.createUserAdmin(this.formGroup.value).subscribe(
          (res) => {
            console.log(res);
            // this.toastr.success(`User enregistré`, 'Success');
            this.router.navigateByUrl('/userList');
          },
          (err) => {
            console.log(err);
            // this.toastr.error(
            //   "Une erreur est survenue lors de l'envoi du formulaire de création du user.",
            //   'Error occured'
            // );
          }
        );
      }
    } else {
      console.log('error');
      // this.toastr.error(
      //   'Veuillez completer le formulaire correctement',
      //   'Error'
      // );
    }
  }

  retour(){
    this.router.navigateByUrl('/userList');
  }
}
