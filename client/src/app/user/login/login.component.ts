import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public permissions: any;

  constructor(private _login: LoginService, fb: FormBuilder, private router: Router) { 
    this.form = fb.group({
        email: ["", Validators.required],
        password: ["", Validators.required]
    });
  }

  ngOnInit() {
  }

  public login() {
    let user = this.form.value;
    this._login.post(user).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      },
      () => {
        this.router.navigate(['/music']);
      }
    );
  }
}
