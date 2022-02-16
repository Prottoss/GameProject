import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../dto/Game';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-game-list-page',
  templateUrl: './game-list-page.component.html',
  styleUrls: ['./game-list-page.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[] = [];
  chosenGenre: string = "";

  constructor( public gamesService: GamesService) { }

  ngOnInit(): void 
  {
    this.gamesService.getGames().subscribe((data)=>{this.games = data});//.filter((g)=>{return g.gameGenre==this.chosenGenre})});
  }




}
