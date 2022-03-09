import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './dto/Game';
import { tap } from "rxjs/operators";
import { OrdersService } from './orders.service';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  games : Game[]=[];

  url: string = "https://nyyvg3k62g.execute-api.us-east-1.amazonaws.com/stage-2";

  constructor(private http: HttpClient) 
  { 
    
  }

  getGames()
  {
    return this.http.get<Game[]>(this.url+"/getGames").pipe(tap((g)=>{this.games = g}));
  }

  getGame(id:string)
  {
    return this.http.get<Game>(this.url+"/getGame?gameId="+id);
  }

  saveGame(game : Game)
  {
    console.log("Save new Game : ", game.gameName);

    if(game.gameID == "0")
    {
      this.http.post<Game>(this.url + "/addGame", game).subscribe((g: Game) => 
      {
        console.log("Callback, g = ", g);
        this.games.push(g);
      });          
    }
    else{
      this.http.post<Game>(this.url+"/addGame",game).subscribe((g: Game) =>
      {
        console.log("callback, g= ",g);
      });
    }
  }

  getKeysCount(id:String)
  {
    return this.http.get<number>(this.url+"/getStock?gameId="+id);
  }
}
