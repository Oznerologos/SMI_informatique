import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertService } from '@full-fledged/alerts';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  configForm: FormGroup;
  idConfig = null;
  dataConfig = null;
  mbCheck = "";
  cpuCheck = "";
  gpuCheck = "";
  ramCheck = "";
  coolingCheck = "";
  powerCheck = "";
  ssd1Check = "";
  ssd2Check = "";
  hdd1Check = "";
  hdd2Check = "";
  wifiCheck = "";
  soundCheck = "";
  caseCheck = "";
  cdCheck = "";
  cardsCheck = "";
  display1Check = "";
  display2Check = "";
  keyboardCheck = "";
  mouseCheck = "";
  inverterCheck = "";
  osCheck = "";
  virusCheck = "";
  officeCheck = "";

  constructor(
    private user: AuthService,
    private adminService: AdminService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private http: HttpClient,
    private elementRef: ElementRef,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    if (this.activedRoute.snapshot.paramMap.get('id')) {
      this.idConfig = this.activedRoute.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#F3F3F3';
    this.currentStep = 1;

    if (this.idConfig) {
      this.adminService.getConfig(this.idConfig).subscribe((res) => {
        this.dataConfig = res;
        this.initFormGroup();

        if (this.configForm.controls['motherboard'].value == "Choisissez pour moi !") {
          this.mbCheck = 'you'
        } else if (this.configForm.controls['motherboard'].value == "Non merci !") {
          this.mbCheck = "no"
        } else {
          this.mbCheck = 'me'
        }
        if (this.configForm.controls['cpu'].value == "Choisissez pour moi !") {
          this.cpuCheck = 'you'
        } else if (this.configForm.controls['cpu'].value == "Non merci !") {
          this.cpuCheck = "no"
        } else {
          this.cpuCheck = 'me'
        }
        if (this.configForm.controls['gpu'].value == "Choisissez pour moi !") {
          this.gpuCheck = 'you'
        } else if (this.configForm.controls['gpu'].value == "Non merci !") {
          this.gpuCheck = "no"
        } else {
          this.gpuCheck = 'me'
        }
        if (this.configForm.controls['ram'].value == "Choisissez pour moi !") {
          this.ramCheck = 'you'
        } else if (this.configForm.controls['ram'].value == "Non merci !") {
          this.ramCheck = "no"
        } else {
          this.ramCheck = 'me'
        }
        if (this.configForm.controls['coolingsystem'].value == "Choisissez pour moi !") {
          this.coolingCheck = 'you'
        } else if (this.configForm.controls['coolingsystem'].value == "Non merci !") {
          this.coolingCheck = "no"
        } else {
          this.coolingCheck = 'me'
        }
        if (this.configForm.controls['powerunit'].value == "Choisissez pour moi !") {
          this.powerCheck = 'you'
        } else if (this.configForm.controls['powerunit'].value == "Non merci !") {
          this.powerCheck = "no"
        } else {
          this.powerCheck = 'me'
        }
        if (this.configForm.controls['ssd1'].value == "Choisissez pour moi !") {
          this.ssd1Check = 'you'
        } else if (this.configForm.controls['ssd1'].value == "Non merci !") {
          this.ssd1Check = "no"
        } else {
          this.ssd1Check = 'me'
        }
        if (this.configForm.controls['ssd2'].value == "Choisissez pour moi !") {
          this.ssd2Check = 'you'
        } else if (this.configForm.controls['ssd2'].value == "Non merci !") {
          this.ssd2Check = "no"
        } else {
          this.ssd2Check = 'me'
        }
        if (this.configForm.controls['hdd1'].value == "Choisissez pour moi !") {
          this.hdd1Check = 'you'
        } else if (this.configForm.controls['hdd1'].value == "Non merci !") {
          this.hdd1Check = "no"
        } else {
          this.hdd1Check = 'me'
        }
        if (this.configForm.controls['hdd2'].value == "Choisissez pour moi !") {
          this.hdd2Check = 'you'
        } else if (this.configForm.controls['hdd2'].value == "Non merci !") {
          this.hdd2Check = "no"
        } else {
          this.hdd2Check = 'me'
        }
        if (this.configForm.controls['wifiboard'].value == "Choisissez pour moi !") {
          this.wifiCheck = 'you'
        } else if (this.configForm.controls['wifiboard'].value == "Non merci !") {
          this.wifiCheck = "no"
        } else {
          this.wifiCheck = 'me'
        }
        if (this.configForm.controls['soundboard'].value == "Choisissez pour moi !") {
          this.soundCheck = 'you'
        } else if (this.configForm.controls['soundboard'].value == "Non merci !") {
          this.soundCheck = "no"
        } else {
          this.soundCheck = 'me'
        }
        if (this.configForm.controls['case'].value == "Choisissez pour moi !") {
          this.caseCheck = 'you'
        } else if (this.configForm.controls['case'].value == "Non merci !") {
          this.caseCheck = "no"
        } else {
          this.caseCheck = 'me'
        }
        if (this.configForm.controls['cdplayerburner'].value == "Choisissez pour moi !") {
          this.cdCheck = 'you'
        } else if (this.configForm.controls['cdplayerburner'].value == "Non merci !") {
          this.cdCheck = "no"
        } else {
          this.cdCheck = 'me'
        }
        if (this.configForm.controls['cardsplayer'].value == "Choisissez pour moi !") {
          this.cardsCheck = 'you'
        } else if (this.configForm.controls['cardsplayer'].value == "Non merci !") {
          this.cardsCheck = "no"
        } else {
          this.cardsCheck = 'me'
        }
        if (this.configForm.controls['display1'].value == "Choisissez pour moi !") {
          this.display1Check = 'you'
        } else if (this.configForm.controls['display1'].value == "Non merci !") {
          this.display1Check = "no"
        } else {
          this.display1Check = 'me'
        }
        if (this.configForm.controls['display2'].value == "Choisissez pour moi !") {
          this.display2Check = 'you'
        } else if (this.configForm.controls['display2'].value == "Non merci !") {
          this.display2Check = "no"
        } else {
          this.display2Check = 'me'
        }
        if (this.configForm.controls['keyboard'].value == "Choisissez pour moi !") {
          this.keyboardCheck = 'you'
        } else if (this.configForm.controls['keyboard'].value == "Non merci !") {
          this.keyboardCheck = "no"
        } else {
          this.keyboardCheck = 'me'
        }
        if (this.configForm.controls['mouse'].value == "Choisissez pour moi !") {
          this.mouseCheck = 'you'
        } else if (this.configForm.controls['mouse'].value == "Non merci !") {
          this.mouseCheck = "no"
        } else {
          this.mouseCheck = 'me'
        }
        if (this.configForm.controls['inverter'].value == "Choisissez pour moi !") {
          this.inverterCheck = 'you'
        } else if (this.configForm.controls['inverter'].value == "Non merci !") {
          this.inverterCheck = "no"
        } else {
          this.inverterCheck = 'me'
        }
        if (this.configForm.controls['os'].value == "Choisissez pour moi !") {
          this.osCheck = 'you'
        } else if (this.configForm.controls['os'].value == "Non merci !") {
          this.osCheck = "no"
        } else {
          this.osCheck = 'me'
        }
        if (this.configForm.controls['antivirus'].value == "Choisissez pour moi !") {
          this.virusCheck = 'you'
        } else if (this.configForm.controls['antivirus'].value == "Non merci !") {
          this.virusCheck = "no"
        } else {
          this.virusCheck = 'me'
        }
        if (this.configForm.controls['microsoftoffice'].value == "Choisissez pour moi !") {
          this.officeCheck = 'you'
        } else if (this.configForm.controls['microsoftoffice'].value == "Non merci !") {
          this.officeCheck = "no"
        } else {
          this.officeCheck = 'me'
        }

      });
    } else {
      this.initFormGroup();
      this.mbCheck = "no";
      this.cpuCheck = "no";
      this.gpuCheck = "no";
      this.ramCheck = "no";
      this.coolingCheck = "no";
      this.powerCheck = "no";
      this.ssd1Check = "no";
      this.ssd2Check = "no";
      this.hdd1Check = "no";
      this.hdd2Check = "no";
      this.wifiCheck = "no";
      this.soundCheck = "no";
      this.caseCheck = "no";
      this.cdCheck = "no";
      this.cardsCheck = "no";
      this.display1Check = "no";
      this.display2Check = "no";
      this.keyboardCheck = "no";
      this.mouseCheck = "no";
      this.inverterCheck = "no";
      this.osCheck = "no";
      this.virusCheck = "no";
      this.officeCheck = "no";
    }
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  initFormGroup() {
    this.configForm = this.formBuilder.group({
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

  currentStep = 1;

  onSubmit(validated: boolean): void {

    this.configForm.controls['validated'].setValue(validated)

    // Le bloc des enfers : Si l'utilisateur a décoché un composant alors qu'il avait rentré une valeur, on reset cette valeur
    if (this.mbCheck == "no") {
      this.configForm.controls['motherboard'].setValue("Non merci !");
    }
    if (this.cpuCheck == "no") {
      this.configForm.controls['cpu'].setValue("Non merci !");
    }
    if (this.gpuCheck == "no") {
      this.configForm.controls['gpu'].setValue("Non merci !");
    }
    if (this.ramCheck == "no") {
      this.configForm.controls['ram'].setValue("Non merci !");
    }
    if (this.coolingCheck == "no") {
      this.configForm.controls['coolingsystem'].setValue("Non merci !");
    }
    if (this.powerCheck == "no") {
      this.configForm.controls['powerunit'].setValue("Non merci !");
    }
    if (this.ssd1Check == "no") {
      this.configForm.controls['ssd1'].setValue("Non merci !");
    }
    if (this.ssd2Check == "no") {
      this.configForm.controls['ssd2'].setValue("Non merci !");
    }
    if (this.hdd1Check == "no") {
      this.configForm.controls['hdd1'].setValue("Non merci !");
    }
    if (this.hdd2Check == "no") {
      this.configForm.controls['hdd2'].setValue("Non merci !");
    }
    if (this.wifiCheck == "no") {
      this.configForm.controls['wifiboard'].setValue("Non merci !");
    }
    if (this.soundCheck == "no") {
      this.configForm.controls['soundboard'].setValue("Non merci !");
    }
    if (this.caseCheck == "no") {
      this.configForm.controls['case'].setValue("Non merci !");
    }
    if (this.cdCheck == "no") {
      this.configForm.controls['cdplayerburner'].setValue("Non merci !");
    }
    if (this.cardsCheck == "no") {
      this.configForm.controls['cardsplayer'].setValue("Non merci !");
    }
    if (this.display1Check == "no") {
      this.configForm.controls['display1'].setValue("Non merci !");
    }
    if (this.display2Check == "no") {
      this.configForm.controls['display2'].setValue("Non merci !");
    }
    if (this.keyboardCheck == "no") {
      this.configForm.controls['keyboard'].setValue("Non merci !");
    }
    if (this.mouseCheck == "no") {
      this.configForm.controls['mouse'].setValue("Non merci !");
    }
    if (this.inverterCheck == "no") {
      this.configForm.controls['inverter'].setValue("Non merci !");
    }
    if (this.osCheck == "no") {
      this.configForm.controls['os'].setValue("Non merci !");
    }
    if (this.virusCheck == "no") {
      this.configForm.controls['antivirus'].setValue("Non merci !");
    }
    if (this.officeCheck == "no") {
      this.configForm.controls['microsoftoffice'].setValue("Non merci !");
    }


    if (this.mbCheck == "you") {
      this.configForm.controls['motherboard'].setValue("Choisissez pour moi !");
    }
    if (this.cpuCheck == "you") {
      this.configForm.controls['cpu'].setValue("Choisissez pour moi !");
    }
    if (this.gpuCheck == "you") {
      this.configForm.controls['gpu'].setValue("Choisissez pour moi !");
    }
    if (this.ramCheck == "you") {
      this.configForm.controls['ram'].setValue("Choisissez pour moi !");
    }
    if (this.coolingCheck == "you") {
      this.configForm.controls['coolingsystem'].setValue("Choisissez pour moi !");
    }
    if (this.powerCheck == "you") {
      this.configForm.controls['powerunit'].setValue("Choisissez pour moi !");
    }
    if (this.ssd1Check == "you") {
      this.configForm.controls['ssd1'].setValue("Choisissez pour moi !");
    }
    if (this.ssd2Check == "you") {
      this.configForm.controls['ssd2'].setValue("Choisissez pour moi !");
    }
    if (this.hdd1Check == "you") {
      this.configForm.controls['hdd1'].setValue("Choisissez pour moi !");
    }
    if (this.hdd2Check == "you") {
      this.configForm.controls['hdd2'].setValue("Choisissez pour moi !");
    }
    if (this.wifiCheck == "you") {
      this.configForm.controls['wifiboard'].setValue("Choisissez pour moi !");
    }
    if (this.soundCheck == "you") {
      this.configForm.controls['soundboard'].setValue("Choisissez pour moi !");
    }
    if (this.caseCheck == "you") {
      this.configForm.controls['case'].setValue("Choisissez pour moi !");
    }
    if (this.cdCheck == "you") {
      this.configForm.controls['cdplayerburner'].setValue("Choisissez pour moi !");
    }
    if (this.cardsCheck == "you") {
      this.configForm.controls['cardsplayer'].setValue("Choisissez pour moi !");
    }
    if (this.display1Check == "you") {
      this.configForm.controls['display1'].setValue("Choisissez pour moi !");
    }
    if (this.display2Check == "you") {
      this.configForm.controls['display2'].setValue("Choisissez pour moi !");
    }
    if (this.keyboardCheck == "you") {
      this.configForm.controls['keyboard'].setValue("Choisissez pour moi !");
    }
    if (this.mouseCheck == "you") {
      this.configForm.controls['mouse'].setValue("Choisissez pour moi !");
    }
    if (this.inverterCheck == "you") {
      this.configForm.controls['inverter'].setValue("Choisissez pour moi !");
    }
    if (this.osCheck == "you") {
      this.configForm.controls['os'].setValue("Choisissez pour moi !");
    }
    if (this.virusCheck == "you") {
      this.configForm.controls['antivirus'].setValue("Choisissez pour moi !");
    }
    if (this.officeCheck == "you") {
      this.configForm.controls['microsoftoffice'].setValue("Choisissez pour moi !");
    }

    if (this.configForm.get('id').value != null) {
      this.http.put("http://localhost:3000/configs/" + this.configForm.get('id').value, this.configForm.value, this.httpOptions).subscribe()
      if (validated == true) {
        this.alertService.success("Configuration enregistrée et envoyée a SMI")
      } else {
        this.alertService.success("Configuration modifié avec succès")
      }

      setTimeout(() => {
        this.router.navigateByUrl('')
      }, 1500);
      
    } else if (this.configForm.controls["name"].value != "" && this.configForm.controls["budget"].value != "" && this.configForm.controls["mounted"].value != "") {
      this.configForm.controls['user'].setValue(this.user.getUserId())
      this.http.post("http://localhost:3000/configs", this.configForm.value, this.httpOptions).subscribe()

      if (validated == true) {
        this.alertService.success("Configuration enregistrée et envoyée a SMI")
      } else {
        this.alertService.success("Configuration sauvegardée")
      }

      setTimeout(() => {
        this.router.navigateByUrl('')
      }, 1500);
      

    } else {
      if (this.configForm.controls["name"].value == "") {
        this.alertService.warning('Remplissez le nom de la config')
      }
      if (this.configForm.controls["budget"].value == "") {
        this.alertService.warning("Remplissez le budget de la config")
      }
      if (this.configForm.controls["mounted"].value == "") {
        this.alertService.warning("Remplissez le montage de la config")
      }
    }
  }

  step(value: number) {
    this.currentStep = this.currentStep + value;
  }
}
