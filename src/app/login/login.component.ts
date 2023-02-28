import { Component } from '@angular/core';
import { Login } from '../common/data/login';

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

  constructor() { }
}
