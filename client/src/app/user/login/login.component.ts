import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _login: LoginService) { }

  ngOnInit() {
    this.login();
  }

  public login() {
    this._login.post({ "email": "admin@mail.com", "password": "admin" }).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      },
      () => {
        let u = JSON.parse(sessionStorage.getItem('user'));
        console.log('se termino :' + u.status);
      }
    );
  }
}
