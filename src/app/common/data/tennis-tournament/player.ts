import { Nationalities } from "./nationalities";
import { Sexe } from "./sexe";

export class Player{
    constructor(public id:number = 0, public firstName:string = "", public lastName:string = "", public nationality:Nationalities = 0, public sexe:Sexe = 0){}
}