import { Component, OnInit } from '@angular/core';
import { Game } from '../dto/Game';

@Component({
  selector: 'app-add-keys-page',
  templateUrl: './add-keys-page.component.html',
  styleUrls: ['./add-keys-page.component.css']
})
export class AddKeysPageComponent implements OnInit {

  game : Game = Game.generateEmptyGame();

  constructor() { }

  ngOnInit(): void {

  }

  getGame(Game : Game){
    //console.log(Game);
    this.game = Game;
  }

}
