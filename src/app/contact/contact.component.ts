import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth/auth.service';
import { NgModel } from '@angular/forms';

const localStorage = window.localStorage;

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactMeComponent implements OnInit {


  messages: any;

  userMsg: any;
  userName: any;
  newMsg: any;



  constructor(private authService: AuthService) {
  }

  onSubmit() {
    this.newMsg = {
      name: this.userName,
      message: this.userMsg
    }

    console.log(this.newMsg);
    this.authService.sendMessage(this.newMsg)
      .subscribe(message => this.messages.push(message));
  }



  ngOnInit() {
  }

}
