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
    address: ''
  })

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
  }
 //TEST GIT MERGE 
}
