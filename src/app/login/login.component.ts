import { Component } from '@angular/core';
import { Login } from '../common/data/login';
import { LoginResponse } from '../common/data/loginResponse';
import { LoginService } from '../common/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public login:Login = new Login();
  public message:string = "";
  public logged:boolean = false;

  public onLogin(){
    this._loginService.postLogin$(this.login)
        .subscribe({
          next: (loginResponse:LoginResponse) => {this.message = loginResponse.message; this.logged = loginResponse.status;
          },
          error:(err) => {this.message = err.error.message; this.logged = err.error.status;}
        })
  }

  constructor(private _loginService:LoginService) {
   }
}
