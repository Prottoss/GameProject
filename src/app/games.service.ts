import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './dto/Game';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  games : Game[]=[];

  url: string = "https://nyyvg3k62g.execute-api.us-east-1.amazonaws.com/stage-2";

  constructor(private http: HttpClient) { 
    // dummy games
    //this.games.push(new Game("ugytiu","Epic Game 1","This is a description for epic game 1", 69.99,""));
    //this.games.push(new Game("af","Epic Game 2","This is a description for epic game 2", 49.99,""));
    //this.games.push(new Game("aef","Epic Game 3","This is a description for epic game 3", 74.99,""));
    //this.games.push(new Game("aewf","Epic Game 4","This is a description for epic game 4", 24.99,""));
  }

  getGames()
  {
    return this.http.get<Game[]>(this.url+"/getGames").pipe(tap((g)=>{this.games = g}));
  }

  //getGames() : Game[]{
    //return this.games;
  //}
}
