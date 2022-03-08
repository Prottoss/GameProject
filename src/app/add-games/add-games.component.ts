import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../dto/Game';
import { FormGroup, NgForm } from '@angular/forms';
import { GamesService } from '../games.service';
import { GameKey } from '../dto/GameKey';

@Component({
  selector: 'app-add-games',
  templateUrl: './add-games.component.html',
  styleUrls: ['./add-games.component.css']
})
export class AddGamesComponent implements OnInit {

  @Input() game : Game;

  notEditable: boolean = true;
  buttonText: string = "Edit";

  constructor(private gameService : GamesService) {
    this.game = new Game("0","","","",0,"");
  }

  ngOnInit(): void {
  }

  onSubmit(details : NgForm)
  {
    if(this.notEditable)
    {
      this.notEditable = false;
      this.buttonText = "Save";
    }
    else
    {
      this.notEditable = true;
      this.buttonText = "Edit";
    
      for(let i in details.value)
      {
        if(details.value[i].length != 0 )
        {
          (this.game as any)[i] = details.value[i];
        }
      }

      console.log("Game = ", this.game);
      //this.game.gameKeys.splice(0,0, new GameKey(""));
      this.gameService.saveGame(this.game);
    } 
  }
  
  new()
  {
    this.notEditable = false;
    this.buttonText = "Save";
    this.game = new Game("0","","","",0,"");
  }

}
