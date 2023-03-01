import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { Devise } from '../data/devise';
import {HttpClient} from '@angular/common/http';

export interface ConvertResult{
  source:string;
  
}

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  // private _apiBaseUrl = "http://localhost:8282/devise-api";

  private _apiBaseUrl = "/devise-api"; //Appelle via le reverse proxy

  // private devises:Devise[] = [
  //   new Devise("EUR", "euro", 1.0),
  //   new Devise("USD", "dollar", 1.1),
  //   new Devise("GBP", "livre", 0.9)
  // ];

  public getAllDevises$():Observable<Devise[]>{
    let url = this._apiBaseUrl + "/public/devise";
    return this._htpp.get<Devise[]>(url);
  }

  // public getCoeff(codeDevise:string){
  //   switch (codeDevise) {
  //     case "EUR":
  //       return 1.0
        
  //     case "USD":
  //       return 1.1

  //     case "GBP":
  //       return 0.9
  //      default:
  //       return 0;
  //   }
  // }

  public convertir$(montant: number, codeDeviseSrc : string, codeDeviseTarget : string) : Observable<number> {
    // let coeff =  Math.random();//coefficient aleatoire ici (simple simulation)
    // let montantConverti = montant * coeff;                    
    // return of(montantConverti) //version temporaire (cependant asynchrone)
    // .pipe(
    //   delay(222) //simuler une attente de 222ms 
    // );
    let url = `${this._apiBaseUrl}/public/convert?amount=${montant}&source=${codeDeviseSrc}&target=${codeDeviseTarget}`;
    return this._htpp.get<object>(url).pipe(map((res:any) => res.result)); 
  } 
  constructor(private _htpp:HttpClient) { }
}
