import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AlertService } from '@full-fledged/alerts';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(
    private user: AuthService,
    private formBuilder: FormBuilder,
    private alertService : AlertService,
    private http : HttpClient,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#F3F3F3';
    this.currentStep = 1;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  configForm = this.formBuilder.group({
    name: '', 
    budget: '',
    mounted: '',
    cpu: '',
    motherboard: '',
    ram: '',
    coolingsystem: '',
    gpu: '',
    ssd1: '',
    ssd2: '',
    hdd1: '',
    hdd2: '',
    cdplayerburner: '',
    cardsplayer: '',
    wifiboard: '',
    case: '',
    display1: '',
    display2: '',
    powerunit: '',
    keyboard: '',
    mouse: '',
    os: '',
    antivirus: '',
    microsoftoffice: '',
    inverter: '',
    message:'',
    soundboard:'',
    validated:'',
    user:''
  })


  mbCheck = "no";
  cpuCheck = "no";
  gpuCheck = "no";
  ramCheck = "no";
  coolingCheck = "no";
  powerCheck = "no";
  ssd1Check = "no";
  ssd2Check = "no";
  hdd1Check = "no";
  hdd2Check = "no";
  wifiCheck = "no";
  soundCheck = "no";
  caseCheck = "no";
  cdCheck = "no";
  cardsCheck = "no";
  display1Check = "no";
  display2Check = "no";
  keyboardCheck = "no";
  mouseCheck = "no";
  inverterCheck = "no";
  osCheck = "no";
  virusCheck = "no";
  officeCheck = "no";
  
  currentStep = 1;

  onSubmit(validated:boolean): void {

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



    if (this.configForm.controls["name"].value != "" && this.configForm.controls["budget"].value != "" && this.configForm.controls["mounted"].value != "" ) {
      this.configForm.controls['user'].setValue(this.user.getUserId())
      this.http.post("http://localhost:3000/configs" ,this.configForm.value, this.httpOptions).subscribe()
      console.log(this.configForm.value)
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

  step(value:number){
    this.currentStep = this.currentStep + value;
  }
}
