import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  private _couleurFondPreferee:string;

  get couleurFondPreferee(){
    return this._couleurFondPreferee;
  }

  set couleurFondPreferee(couleur:string){
    this._couleurFondPreferee = couleur;
    localStorage.setItem("preference.couleurFond", couleur);
  }

  constructor() {
    let couleur = localStorage.getItem("preference.couleurFond");
    this._couleurFondPreferee = couleur? couleur : "lightgrey";
   }

}
