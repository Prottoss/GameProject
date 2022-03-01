import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Game } from '../dto/Game';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  @Output() game: EventEmitter<Game> = new EventEmitter<Game>();

  gameId!: number;
  games: Game=new Game("","","","",0,"");
  //game!: Game;
  private sub : any;
  
  
  constructor(private gameService: GamesService, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.gameId = params['gameId'];
      console.log("GameId: ", this.gameId);
      this.gameService.getGame(this.gameId).pipe(tap((g)=>{this.games = g})).subscribe();
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}