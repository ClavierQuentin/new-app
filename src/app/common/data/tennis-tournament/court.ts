import { Match } from "./match";

export class Court{
    constructor(
        public id:number = 0, 
        public name:string = "", 
        public number:number = 0, 
        public matchs:Match[] = [])
        {}
}