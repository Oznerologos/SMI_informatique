import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
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

  mbCheck = false;
  procCheck = false;
  gpuCheck = false;
  ramCheck = false;
  coolingCheck = false;
  powerCheck = false;
  ssd1Check = false;
  ssd2Check = false;
  hdd1Check = false;
  hdd2Check = false;
  wifiCheck = false;
  soundCheck = false;
  caseCheck = false;
  cdCheck = false;
  cardsCheck = false;
  display1Check = false;
  display2Check = false;
  keybordCheck = false;
  mouseCheck = false;
  inverterCheck = false;
  osCheck = false;
  virusCheck = false;
  officeCheck = false;
  

  constructor(
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    console.log(this.configForm.value)
  }

  ngOnInit(): void {
  }
 //TEST GIT MERGE 
}
