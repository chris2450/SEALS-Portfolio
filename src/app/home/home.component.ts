import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { NgModel, NgForm} from '@angular/forms';
import { HttpClient} from '@angular/common/http';

class Form {
  sealName: string;
  email: string;
  firstName: string;
  lastName: string;
  content: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public form: Form;

  constructor(public http: HttpClient) {
    this.form = new Form();
    this.form.sealName = 'Christian Barahona';


   }
