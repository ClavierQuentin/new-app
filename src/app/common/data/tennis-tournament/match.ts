import { Court } from "./court";
import { Player } from "./player";
import { Referee } from "./referee";
import { Tournament } from "./tournament";

export class Match{
    constructor(
        public id:number = 0, 
        public startingDate:string = new Date().toISOString(), 
        public firstPlayer:Player = new Player(), 
        public secondPlayer:Player = new Player(), 
        public court:Court = new Court(), 
        public referee:Referee = new Referee(), 
        public tournament:Tournament = new Tournament()
        ){}
}