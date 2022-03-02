import { Component, OnInit } from '@angular/core';
import { Game } from '../dto/Game';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-games-page',
  templateUrl: './add-games-page.component.html',
  styleUrls: ['./add-games-page.component.css']
})
export class AddGamesPageComponent implements OnInit {

  game : Game = new Game("","","","",0,"");

  constructor(public userService: UsersService) { }

  ngOnInit(): void {

    console.log(this.userService.getUsers)
  }

  getGame(Game : Game){
    //console.log(Game);
    this.game = Game;
  }

}
