import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  formNewsletter = this.formBuilder.group({
    firstname: ['', Validators.required],
  });
  constructor( private formBuilder: FormBuilder ) { }

  submitNewsletter(){
  }

  ngOnInit(): void {
  }

}
