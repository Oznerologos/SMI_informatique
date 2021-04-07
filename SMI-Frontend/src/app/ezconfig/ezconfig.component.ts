import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertService } from '@full-fledged/alerts';


@Component({
  selector: 'app-ezconfig',
  templateUrl: './ezconfig.component.html',
  styleUrls: ['./ezconfig.component.css']
})
export class EzconfigComponent implements OnInit {

  constructor(
    private user: AuthService,
    private router: Router,
    private http : HttpClient,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
  
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };


  steps= []
  currentStep = "start"
  config= []

  configObj = {
    "name": 'Config Auto', 
    "budget" : 0 ,
    "mounted": 'Oui',
    "cpu": 'Choisissez pour moi !',
    "motherboard": 'Choisissez pour moi !',
    "ram": 'Choisissez pour moi !',
    "coolingsystem": 'Choisissez pour moi !',
    "gpu": 'Choisissez pour moi !',
    "ssd1": 'Choisissez pour moi !',
    "ssd2": 'Choisissez pour moi !',
    "hdd1": 'Choisissez pour moi !',
    "hdd2": 'Choisissez pour moi !',
    "cdplayerburner": 'Choisissez pour moi !',
    "cardsplayer": 'Choisissez pour moi !',
    "wifiboard": 'Choisissez pour moi !',
    "case": 'Choisissez pour moi !',
    "display1": 'Choisissez pour moi !',
    "display2": 'Choisissez pour moi !',
    "powerunit": 'Choisissez pour moi !',
    "keyboard": 'Choisissez pour moi !',
    "mouse": 'Choisissez pour moi !',
    "os": 'Choisissez pour moi !',
    "antivirus": 'Choisissez pour moi !',
    "microsoftoffice": 'Choisissez pour moi !',
    "inverter": 'Choisissez pour moi !',
    "message":'CONFIG AUTOMATIQUE : ',
    "soundboard":'Choisissez pour moi !',
    "validated":'Oui',
    "user":''
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
    this.configObj.user =this.user.getUserId();
   
    switch (this.config[this.config.length -1]) {
      case "Bas de gamme":
        this.configObj.budget =1400;
        break;

      case "Milieu de gamme":
        this.configObj.budget = 1900;
        break;

      case "Haut de gamme":
        this.configObj.budget = 2200;
        break;

      case "Très haut de gamme" : 
      this.configObj.budget = 2500;
        break;
      default:
        this.configObj.budget = 0;
        break;
    }
    
    this.config.forEach(element => {
      this.configObj.message += element +" || ";
    });

    this.http.post("http://localhost:3000/configs", this.configObj, this.httpOptions).subscribe()

    this.alertService.success("Configuration enregistrée et envoyée a SMI")

    setTimeout(() => {
      this.router.navigateByUrl('')
    }, 1500);

  }
}
