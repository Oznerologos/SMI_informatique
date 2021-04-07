import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ezconfig',
  templateUrl: './ezconfig.component.html',
  styleUrls: ['./ezconfig.component.css']
})
export class EzconfigComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  steps= []
  currentStep = "start"
  config= []

  configObj : {
    name: 'Config Auto', 
    budget: '',
    mounted: 'Oui',
    cpu: 'Choisissez pour moi !',
    motherboard: 'Choisissez pour moi !',
    ram: 'Choisissez pour moi !',
    coolingsystem: 'Choisissez pour moi !',
    gpu: 'Choisissez pour moi !',
    ssd1: 'Choisissez pour moi !',
    ssd2: 'Choisissez pour moi !',
    hdd1: 'Choisissez pour moi !',
    hdd2: 'Choisissez pour moi !',
    cdplayerburner: 'Choisissez pour moi !',
    cardsplayer: 'Choisissez pour moi !',
    wifiboard: 'Choisissez pour moi !',
    case: 'Choisissez pour moi !',
    display1: 'Choisissez pour moi !',
    display2: 'Choisissez pour moi !',
    powerunit: 'Choisissez pour moi !',
    keyboard: 'Choisissez pour moi !',
    mouse: 'Choisissez pour moi !',
    os: 'Choisissez pour moi !',
    antivirus: 'Choisissez pour moi !',
    microsoftoffice: 'Choisissez pour moi !',
    inverter: 'Choisissez pour moi !',
    message:'Choisissez pour moi !',
    soundboard:'Choisissez pour moi !',
    validated:'Oui',
    user:''
  }

  nextStep(nextStep, choix) {
    this.config.push(choix)
    this.steps.push(this.currentStep);
    this.currentStep = nextStep
    console.log(this.currentStep)
    console.log(this.steps)
    console.log(this.config)
  }

  previous(){
    
    this.config.pop()
    this.currentStep = this.steps[this.steps.length - 1]
    this.steps.pop()
  }

  submit(){
    
  }
}
