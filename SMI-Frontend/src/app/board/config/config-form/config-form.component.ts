import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.css']
})
export class ConfigFormComponent implements OnInit {
  formGroup: FormGroup;
  idConfig = null;
  dataConfig = null;

  constructor(    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private authService: AuthService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    if (this.activedRoute.snapshot.paramMap.get('id')) {
      this.idConfig = this.activedRoute.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void {
    if (this.idConfig) {
      this.adminService.getConfig(this.idConfig).subscribe((res) => {
        this.dataConfig = res;
        this.initFormGroup();
      });
    } else {
      this.initFormGroup();
      this.formGroup.controls['user'].setValue(this.authService.getUserId())
    }
  }

  initFormGroup() {
    this.formGroup = this.formBuilder.group({
      id: [this.dataConfig ? this.dataConfig.id : null],
      name: [this.dataConfig ? this.dataConfig.name : null, [Validators.required]],
      budget: [this.dataConfig ? this.dataConfig.budget : null, [Validators.required]],
      mounted: [this.dataConfig ? this.dataConfig.mounted : null, [Validators.required]],
      cpu: [this.dataConfig ? this.dataConfig.cpu : null, [Validators.required]],
      motherboard: [this.dataConfig ? this.dataConfig.motherboard : null, [Validators.required]],
      ram: [this.dataConfig ? this.dataConfig.ram : null, [Validators.required]],
      coolingsystem: [this.dataConfig ? this.dataConfig.coolingsystem : null, [Validators.required]],
      gpu: [this.dataConfig ? this.dataConfig.gpu : null, [Validators.required]],
      ssd1: [this.dataConfig ? this.dataConfig.ssd1 : null, [Validators.required]],
      ssd2: [this.dataConfig ? this.dataConfig.ssd2 : null, [Validators.required]],
      hdd1: [this.dataConfig ? this.dataConfig.hdd1 : null, [Validators.required]],
      hdd2: [this.dataConfig ? this.dataConfig.hdd2 : null, [Validators.required]],
      cdplayerburner: [this.dataConfig ? this.dataConfig.cdplayerburner : null, [Validators.required]],
      cardsplayer: [this.dataConfig ? this.dataConfig.cardsplayer : null, [Validators.required]],
      wifiboard: [this.dataConfig ? this.dataConfig.wifiboard : null, [Validators.required]],
      case: [this.dataConfig ? this.dataConfig.case : null, [Validators.required]],
      display1: [this.dataConfig ? this.dataConfig.display1 : null, [Validators.required]],
      display2: [this.dataConfig ? this.dataConfig.display2 : null, [Validators.required]],
      powerunit: [this.dataConfig ? this.dataConfig.powerunit : null, [Validators.required]],
      keyboard: [this.dataConfig ? this.dataConfig.keyboard : null, [Validators.required]],
      mouse: [this.dataConfig ? this.dataConfig.mouse : null, [Validators.required]],
      os: [this.dataConfig ? this.dataConfig.os : null, [Validators.required]],
      antivirus: [this.dataConfig ? this.dataConfig.antivirus : null, [Validators.required]],
      microsoftoffice: [this.dataConfig ? this.dataConfig.microsoftoffice : null, [Validators.required]],
      soundboard: [this.dataConfig ? this.dataConfig.soundboard : null, [Validators.required]],
      inverter: [this.dataConfig ? this.dataConfig.inverter : null, [Validators.required]],
      validated: [this.dataConfig ? this.dataConfig.validated : null, [Validators.required]],
      message: [this.dataConfig ? this.dataConfig.message : null, [Validators.required]],
      user: [this.dataConfig ? this.dataConfig.user : null, [Validators.required]]
    })
  }

  public onSubmit() {
    if (this.formGroup.valid) {
      if (this.formGroup.get('id').value != null) {
        this.adminService.updateConfig(this.formGroup.value).subscribe(
          (res) => {
            console.log(res);
            // this.toastr.success(`Config modifié`, 'Success');
            this.router.navigateByUrl('/configList');
          },
          (err) => {
            console.log(err);
            // this.toastr.error(
            //   "Une erreur est survenue lors de l'envoi du formulaire de modification de la config.",
            //   'Error occured'
            // );
          }
        );
      } else {
        this.adminService.createConfig(this.formGroup.value).subscribe(
          (res) => {
            console.log(res);
            // this.toastr.success(`Config enregistré`, 'Success');
            this.router.navigateByUrl('/configList');
          },
          (err) => {
            console.log(err);
            // this.toastr.error(
            //   "Une erreur est survenue lors de l'envoi du formulaire de création de la config.",
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
    this.router.navigateByUrl('/configList');
  }

}
