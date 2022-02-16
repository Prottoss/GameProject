import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../dto/Game';
import { GamesService } from '../games.service';
import { GenresSelectComponent } from '../genres-select/genres-select.component';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-game-list-page',
  templateUrl: './game-list-page.component.html',
  styleUrls: ['./game-list-page.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[] = [];
  gamesGenre: string = "";
  

  @Input() public resultGame!: Game;

  constructor( public gamesService: GamesService, public genres: GenresSelectComponent) { }

  ngOnInit(): void {
    //this.gamesGenre = this.genres.selectedGenre(this.gamesGenre);
    //console.log(this.gamesGenre);
    this.gamesService.getGames().subscribe((data)=>{this.games = data.filter((g)=>{return g.gameGenre==this.gamesGenre})});
  }





}
