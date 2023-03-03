import { Match } from "./match";

export class Tournament{
    constructor(
        public matchs:Match[] = [], 
        public name:string = "", 
        public id:number = 0)
        {}
}