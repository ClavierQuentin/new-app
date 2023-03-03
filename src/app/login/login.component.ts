import { Component } from '@angular/core';
import { Login } from '../common/data/login';
import { LoginResponse } from '../common/data/loginResponse';
import { LoginService } from '../common/services/login.service';
import { SessionService } from '../common/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public login:Login = new Login();
  public message:string = "";
  // public logged:boolean = false;

  public onLogin(){
    if(this.sessionService.isConnected){
      this.login.username = this.sessionService.username;
    }
    this._loginService.postLogin$(this.login)
        .subscribe({
          next: (loginResponse:LoginResponse) => {this.message = loginResponse.message; this.sessionService.isConnected = loginResponse.status; this.sessionService.username = loginResponse.username;
          },
          error:(err) => {this.message = err.error.message; this.sessionService.isConnected = err.error.status;}
        })
  }

  constructor(public _loginService:LoginService, public sessionService:SessionService){
    // this.login.username = _loginService.username;
   }
}
