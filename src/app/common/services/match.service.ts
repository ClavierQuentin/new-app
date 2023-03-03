import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Court } from '../data/tennis-tournament/court';
import { Match } from '../data/tennis-tournament/match';
import { Referee } from '../data/tennis-tournament/referee';
import { Tournament } from '../data/tennis-tournament/tournament';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private _baseUrl = "/api/Matches";

  public getAll$():Observable<Match[]>{
    return this._htpp.get<Match[]>(this._baseUrl);
  }

  public getReferee$():Observable<Referee[]>{
    return this._htpp.get<Referee[]>("/api/Referees");
  }
  public getCourts$():Observable<Court[]>{
    return this._htpp.get<Court[]>("api/Courts");
  }
  public getTournaments$():Observable<Tournament[]>{
    return this._htpp.get<Tournament[]>("api/Tournaments");
  }

  public addMatch$(match:Match):Observable<Match>{
    return this._htpp.post<Match>(this._baseUrl, match);
  }
  constructor(private _htpp:HttpClient) { }
}
