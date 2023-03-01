import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../data/login';
import { LoginResponse } from '../data/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _apiBasUrl = "/login-api";

  public username:string = "";
  
  constructor(private _http:HttpClient) { 
  }

  public postLogin$(login:Login):Observable<LoginResponse>{
    let url = `${this._apiBasUrl}/public/auth`;
    return this._http.post<LoginResponse>(url, login);
  }
}
