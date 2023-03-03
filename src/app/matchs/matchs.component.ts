import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Match } from '../common/data/tennis-tournament/match';
import { Nationalities } from '../common/data/tennis-tournament/nationalities';
import { MatchService } from '../common/services/match.service';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css']
})
export class MatchsComponent implements OnInit {

  public matchList:Match[] = [];

  public getNationalityFromEnum(nationality:Nationalities){
    return Nationalities[nationality];
  }

  public async onGetAll(){
    try{
      this.matchList = await firstValueFrom(this.matchService.getAll$());
      console.log(this.matchList);
    }catch(err){
      console.log(err);
    }
    
  }
  constructor(private matchService:MatchService){}

  ngOnInit(): void {
      this.onGetAll();
  }
}
