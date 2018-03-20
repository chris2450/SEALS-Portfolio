import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth/auth.service';
import { Router } from '@angular/router';

class Credentials {
  email: string;
  password: string;
}

interface ServerResponse {
  type: boolean;
  data: any;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public credentials: Credentials;
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.credentials = new Credentials();
  }

  onSubmit() {
    this.auth.login(this.credentials)
      .subscribe((res: ServerResponse) => {
        console.log(res);
        if (res.type === true) {
          console.log('logged in');
          this.credentials.email = '';
          this.credentials.password = '';
          this.router.navigateByUrl('home');
        }
      }, (err) => {
  console.log(err);
});
console.log(this.credentials);
  }
}
