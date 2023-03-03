import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Nationalities } from '../common/data/tennis-tournament/nationalities';
import { Player } from '../common/data/tennis-tournament/player';
import { Sexe } from '../common/data/tennis-tournament/sexe';
import { PlayerService } from '../common/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit{
  public playerList:Player[] = [];

  public nationalites = Nationalities;
  public nationalityEnumKeys:any[] = [];
  public sexes = Sexe;
  public sexeEnumKeys:any[] = [];

  public selectedPlayer:Player | null = null;
  public isSelected:boolean = false;

  public isNew:boolean = false;

  public player:Player = new Player();
  public newPlayer:Player = new Player();

  public nationaly(nationalité:Nationalities){
    return Nationalities[nationalité];
  }
  public sexe(sexe:Sexe){
    return Sexe[sexe];
  }

  public clone(player:Player){
    return JSON.parse(JSON.stringify(player));
  }

  public changeEnum(player:Player){
    player.nationality = Number(player.nationality);
    player.sexe = Number(player.sexe);
  }

  public deleteFromList(list:Player[], player:Player){
    for(let i = 0; i < list.length; i++){
      if(list[i].id == player.id){
        list.splice(i, 1);
      }
    }
  }

  public updateList(list:Player[], player:Player){
    for(let i = 0; i < list.length; i++){
      if(list[i].id == player.id){
        list[i] = player;
      }
    }
  }

  public async onGetAll(){
    try{
      this.playerList = await firstValueFrom(this.playerService.getAllPlayers$());      
    }catch(err){
      console.log(err);
    }
  }

  public onDetails(p:Player){
    this.selectedPlayer = p;
    this.player = this.clone(p);
  }

  public onNewform(){
    if(!this.isNew){
      this.isNew = true;
    }else{
      this.isNew = false
    }
  }

  public async onAddNewPlayer(){
    this.changeEnum(this.newPlayer);
    try{
      let addedPlayer = await firstValueFrom(this.playerService.addNewPlayer$(this.newPlayer));
      this.playerList.push(addedPlayer);
      this.isNew = false;
    }catch(err){
      console.log(err);
    }
  }

  public async onUpdatePlayer(){
    this.changeEnum(this.player);
    try{
      await firstValueFrom(this.playerService.updatePlayer$(this.player));
      this.updateList(this.playerList, this.player);      
    } catch(err){
      console.log(err);
    }
  }

  public async onDelete(){
    if(window.confirm("Voulez-vous supprimer définitivement ce joueur?")){
      try{
        await firstValueFrom(this.playerService.deletePlayer$(this.player));
        this.deleteFromList(this.playerList, this.player);
      }catch(err){
        console.log(err);
      }
    }
  }

  constructor(private playerService:PlayerService){
    this.nationalityEnumKeys = Object.keys(this.nationalites).filter(n => !isNaN(Number(n)));
    this.sexeEnumKeys = Object.keys(this.sexes).filter(s => !isNaN(Number(s)));
  }

  ngOnInit(){
    this.onGetAll();
  }
}
