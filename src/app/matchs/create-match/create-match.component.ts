import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { Court } from 'src/app/common/data/tennis-tournament/court';
import { Match } from 'src/app/common/data/tennis-tournament/match';
import { Player } from 'src/app/common/data/tennis-tournament/player';
import { Referee } from 'src/app/common/data/tennis-tournament/referee';
import { Tournament } from 'src/app/common/data/tennis-tournament/tournament';
import { MatchService } from 'src/app/common/services/match.service';
import { PlayerService } from 'src/app/common/services/player.service';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.css']
})
export class CreateMatchComponent implements OnInit {
  public firstPlayerId:number = 0;
  public secondPlayerId:number = 0;
  public refereeId:number = 0;
  public courtId:number = 0;
  public tournamentId:number = 0;


  public match:Match = new Match();
  public firstPlayer:Player | null = null;
  public secondPlayer:Player | null = null;
  public referee:Referee | null = null;
  public court:Court | null = null;
  public tournament:Tournament | null = null; 

  public playerList:Player[] = [];
  public secondPlayerList:Player[] = [];
  public refereeList:Referee[] = [];
  public courtList:Court[] = [];
  public tournamentList:Tournament[] = [];

  public isFirstPlayerSelected:boolean = false;

  public clone(object:object){
    return JSON.parse(JSON.stringify(object));
  }


  public async onGetList(){
    try{
      this.playerList = await firstValueFrom(this.playerService.getAllPlayers$());
      this.refereeList = await firstValueFrom(this.matchService.getReferee$());
      this.courtList = await firstValueFrom(this.matchService.getCourts$());
      this.tournamentList = await firstValueFrom(this.matchService.getTournaments$()); 
    }catch(err){
      console.log(err);
    }
  }

  public onSelectFirstPlayer(){
    let firstPlayerList:Player[] = this.clone(this.playerList);
    for(let i = 0; i < firstPlayerList.length; i++){
      if(firstPlayerList[i].id == this.firstPlayerId){
        this.match.firstPlayer = firstPlayerList[i];
        firstPlayerList.splice(i, 1);
        this.secondPlayerList = firstPlayerList;
        this.isFirstPlayerSelected = true;
      }
    }    
  }

  public async onAddMatch(){
    for(let i = 0; i < this.playerList.length; i++){
      if(this.playerList[i].id == this.secondPlayerId){
        this.match.secondPlayer = this.playerList[i];
      }
    }
    for(let i = 0; i < this.refereeList.length; i++){
      if(this.refereeList[i].id == this.refereeId){
        this.match.referee = this.refereeList[i];
      }
    }
    for(let i = 0; i < this.courtList.length; i++){
      if(this.courtList[i].id == this.courtId){
        this.match.court = this.courtList[i];
      }
    }
    for(let i = 0; i < this.tournamentList.length; i++){
      if(this.tournamentList[i].id == this.tournamentId){
        this.match.tournament = this.tournamentList[i];
      }
    }
    try{
      let newMatch = await firstValueFrom(this.matchService.addMatch$(this.match));
      if(newMatch){
        location.href="/matchs";
      }
      console.log(newMatch);
    }catch(err){
      console.log(err);
      
    }
  }

  constructor(private playerService:PlayerService, private matchService:MatchService){} 

  ngOnInit(): void {
      this.onGetList();
  }
}
