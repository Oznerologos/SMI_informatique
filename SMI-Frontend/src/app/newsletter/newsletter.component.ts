import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  formNewsletter = this.formBuilder.group({
    mail: ['', Validators.required],
  });
  constructor(private formBuilder: FormBuilder, private http: HttpClient ) { }

  ngOnInit(): void {
  }

  submitNewsletter(){
    console.log(this.formNewsletter.value);
    this.http.post("http://localhost:3000/newsletters", this.formNewsletter.value).subscribe();
  }

}
