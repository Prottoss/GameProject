import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../dto/Game';
import { GamesService } from '../games.service';
import { GenresSelectComponent } from '../genres-select/genres-select.component';

@Component({
  selector: 'app-game-list-page',
  templateUrl: './game-list-page.component.html',
  styleUrls: ['./game-list-page.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[] = [];
  chosenGenre: string = "";

  constructor( public gamesService: GamesService, public genresComp: GenresSelectComponent) { }

  ngOnInit(): void 
  { 
    this.chosenGenre = this.genresComp.chosenGenre;
    this.gamesService.getGames().subscribe((data)=>{this.games = data.filter((g)=>{return g.gameGenre==this.chosenGenre})});
  }




}
