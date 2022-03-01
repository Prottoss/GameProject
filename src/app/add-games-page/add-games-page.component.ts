import { Component, OnInit } from '@angular/core';
import { Game } from '../dto/Game';

@Component({
  selector: 'app-add-games-page',
  templateUrl: './add-games-page.component.html',
  styleUrls: ['./add-games-page.component.css']
})
export class AddGamesPageComponent implements OnInit {

  game : Game = new Game("","","","",0,"");

  constructor() { }

  ngOnInit(): void {
  }

  getGame(Game : Game){
    //console.log(Game);
    this.game = Game;
  }

}
