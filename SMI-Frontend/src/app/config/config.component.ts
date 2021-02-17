import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AlertService } from '@full-fledged/alerts';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private alertService : AlertService,
    private http : HttpClient,
  ) {}

  ngOnInit(): void {
  }

  configForm = this.formBuilder.group({
    name: '', 
    budget: '',
    mounted: '',
    proc: '',
    motherBoard: '',
    RAM: '',
    coolingSystem: '',
    GPU: '',
    SSD1: '',
    SSD2: '',
    HDD1: '',
    HDD2: '',
    cdPlayerBurner: '',
    cardsPlayer: '',
    wifiBoard: '',
    case: '',
    display1: '',
    display2: '',
    powerUnit: '',
    keyBoard: '',
    mouse: '',
    OS: '',
    antivirus: '',
    microsoftOffice: '',
    inverter: '',
    message:'',
    soundBoard:'',
  })


  mbCheck = "no";
  procCheck = "no";
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
  

  

  onSubmit(): void {

    // Le bloc des enfers : Si l'utilisateur a décoché un composant alors qu'il avait rentré une valeur, on reset cette valeur
    if (this.mbCheck == "no") {
      this.configForm.controls['motherBoard'].setValue("Non merci !");
    }
    if (this.procCheck == "no") {
      this.configForm.controls['proc'].setValue("Non merci !");
    }
    if (this.gpuCheck == "no") {
      this.configForm.controls['GPU'].setValue("Non merci !");
    }
    if (this.ramCheck == "no") {
      this.configForm.controls['RAM'].setValue("Non merci !");
    }
    if (this.coolingCheck == "no") {
      this.configForm.controls['coolingSystem'].setValue("Non merci !");
    }
    if (this.powerCheck == "no") {
      this.configForm.controls['powerUnit'].setValue("Non merci !");
    }
    if (this.ssd1Check == "no") {
      this.configForm.controls['SSD1'].setValue("Non merci !");
    }
    if (this.ssd2Check == "no") {
      this.configForm.controls['SSD2'].setValue("Non merci !");
    }
    if (this.hdd1Check == "no") {
      this.configForm.controls['HDD1'].setValue("Non merci !");
    }
    if (this.hdd2Check == "no") {
      this.configForm.controls['HDD2'].setValue("Non merci !");
    }
    if (this.wifiCheck == "no") {
      this.configForm.controls['wifiBoard'].setValue("Non merci !");
    }
    if (this.soundCheck == "no") {
      this.configForm.controls['soundBoard'].setValue("Non merci !");
    }
    if (this.caseCheck == "no") {
      this.configForm.controls['case'].setValue("Non merci !");
    }
    if (this.cdCheck == "no") {
      this.configForm.controls['cdPlayerBurner'].setValue("Non merci !");
    }
    if (this.cardsCheck == "no") {
      this.configForm.controls['cardsPlayer'].setValue("Non merci !");
    }
    if (this.display1Check == "no") {
      this.configForm.controls['display1'].setValue("Non merci !");
    }
    if (this.display2Check == "no") {
      this.configForm.controls['display2'].setValue("Non merci !");
    }
    if (this.keyboardCheck == "no") {
      this.configForm.controls['keyBoard'].setValue("Non merci !");
    }
    if (this.mouseCheck == "no") {
      this.configForm.controls['mouse'].setValue("Non merci !");
    }
    if (this.inverterCheck == "no") {
      this.configForm.controls['inverter'].setValue("Non merci !");
    }
    if (this.osCheck == "no") {
      this.configForm.controls['OS'].setValue("Non merci !");
    }
    if (this.virusCheck == "no") {
      this.configForm.controls['antivirus'].setValue("Non merci !");
    }
    if (this.officeCheck == "no") {
      this.configForm.controls['microsoftOffice'].setValue("Non merci !");
    }


    if (this.mbCheck == "you") {
      this.configForm.controls['motherBoard'].setValue("Choisissez pour moi !");
    }
    if (this.procCheck == "you") {
      this.configForm.controls['proc'].setValue("Choisissez pour moi !");
    }
    if (this.gpuCheck == "you") {
      this.configForm.controls['GPU'].setValue("Choisissez pour moi !");
    }
    if (this.ramCheck == "you") {
      this.configForm.controls['RAM'].setValue("Choisissez pour moi !");
    }
    if (this.coolingCheck == "you") {
      this.configForm.controls['coolingSystem'].setValue("Choisissez pour moi !");
    }
    if (this.powerCheck == "you") {
      this.configForm.controls['powerUnit'].setValue("Choisissez pour moi !");
    }
    if (this.ssd1Check == "you") {
      this.configForm.controls['SSD1'].setValue("Choisissez pour moi !");
    }
    if (this.ssd2Check == "you") {
      this.configForm.controls['SSD2'].setValue("Choisissez pour moi !");
    }
    if (this.hdd1Check == "you") {
      this.configForm.controls['HDD1'].setValue("Choisissez pour moi !");
    }
    if (this.hdd2Check == "you") {
      this.configForm.controls['HDD2'].setValue("Choisissez pour moi !");
    }
    if (this.wifiCheck == "you") {
      this.configForm.controls['wifiBoard'].setValue("Choisissez pour moi !");
    }
    if (this.soundCheck == "you") {
      this.configForm.controls['soundBoard'].setValue("Choisissez pour moi !");
    }
    if (this.caseCheck == "you") {
      this.configForm.controls['case'].setValue("Choisissez pour moi !");
    }
    if (this.cdCheck == "you") {
      this.configForm.controls['cdPlayerBurner'].setValue("Choisissez pour moi !");
    }
    if (this.cardsCheck == "you") {
      this.configForm.controls['cardsPlayer'].setValue("Choisissez pour moi !");
    }
    if (this.display1Check == "you") {
      this.configForm.controls['display1'].setValue("Choisissez pour moi !");
    }
    if (this.display2Check == "you") {
      this.configForm.controls['display2'].setValue("Choisissez pour moi !");
    }
    if (this.keyboardCheck == "you") {
      this.configForm.controls['keyBoard'].setValue("Choisissez pour moi !");
    }
    if (this.mouseCheck == "you") {
      this.configForm.controls['mouse'].setValue("Choisissez pour moi !");
    }
    if (this.inverterCheck == "you") {
      this.configForm.controls['inverter'].setValue("Choisissez pour moi !");
    }
    if (this.osCheck == "you") {
      this.configForm.controls['OS'].setValue("Choisissez pour moi !");
    }
    if (this.virusCheck == "you") {
      this.configForm.controls['antivirus'].setValue("Choisissez pour moi !");
    }
    if (this.officeCheck == "you") {
      this.configForm.controls['microsoftOffice'].setValue("Choisissez pour moi !");
    }

    if (this.configForm.controls["name"].value != "" && this.configForm.controls["budget"].value != "" && this.configForm.controls["mounted"].value != "" ) {
      this.http.post<any>("https://localhost:3000/configs" ,this.configForm.value)
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
}
