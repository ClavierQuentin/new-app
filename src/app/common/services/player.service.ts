import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../data/tennis-tournament/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private _baseUrl = "/api/Players";

  public getAllPlayers$():Observable<Player[]>{
    return this._http.get<Player[]>(this._baseUrl);
  }

  public addNewPlayer$(player:Player):Observable<any>{
    return this._http.post<any>(this._baseUrl, player);
  }

  public updatePlayer$(player:Player):Observable<any>{
    let url = this._baseUrl + `/${player.id}`;
    return this._http.put<any>(url, player);
  }

  public deletePlayer$(player:Player):Observable<any>{
    let url = this._baseUrl + `/${player.id}`;
    return this._http.delete<any>(url);
  }

  constructor(private _http:HttpClient) { }
}
