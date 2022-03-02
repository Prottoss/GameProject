import { Component, Input, OnInit, Output } from '@angular/core';
import { Game } from '../dto/Game';
import { User } from '../dto/User';
import { GamesService } from '../games.service';
import { GenresSelectComponent } from '../genres-select/genres-select.component';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-game-list-page',
  templateUrl: './game-list-page.component.html',
  styleUrls: ['./game-list-page.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[] = [];
  chosenGenre = "";

  constructor( public gamesService: GamesService, public genresComp: GenresSelectComponent) { }

  ngOnInit(): void 
  {
    this.gamesService.getGames().subscribe((data)=>{this.games = data}); // get all game data, it will be filtered with the pipe later
  }

  genreChosen(genreName: string){
    console.log(genreName);
  }




}
