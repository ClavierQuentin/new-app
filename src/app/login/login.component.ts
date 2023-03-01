import { Component } from '@angular/core';
import { Login } from '../common/data/login';
import { LoginService } from '../common/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public login:Login = new Login();
  public message:string = "";

  public onLogin(){
    this.message ="Données saisies" + JSON.stringify(this.login);
  }

  constructor(public loginService:LoginService) {
    this.login.username = loginService.username;
   }
}
