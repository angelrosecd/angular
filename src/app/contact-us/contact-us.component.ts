import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {


  getName='';
  getEmail='';
  getmessage='';

  onSubmit(data:NgForm){
    console.log(data.value);
    this.getName=data.value.name;
    this.getEmail=data.value.email;
    this.getmessage=data.value.message;
    console.log(this.getName)
    console.log(this.getEmail)
    console.log(this.getmessage)
  }

  constructor() { }

  ngOnInit() {
  }

}
