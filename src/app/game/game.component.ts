import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Game } from '../dto/Game';
import { GamesService } from '../games.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Output() game: EventEmitter<Game> = new EventEmitter<Game>();

  games : Game[] = [];
  selectedGame : Game = new Game("","","","",0,"");
  searchText : string = "";

  constructor(private gameService: GamesService) {
    
  }
  ngOnInit(): void {
    this.gameService.getGames().subscribe( (data)=>{this.games = data;} );
  }

  selected(game: Game){
    console.log("Selected = ", game)
    this.selectedGame = game;
    this.game.emit(game);
  }

}
