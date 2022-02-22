import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../dto/Game';
import { FormGroup, NgForm } from '@angular/forms';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-add-games',
  templateUrl: './add-games.component.html',
  styleUrls: ['./add-games.component.css']
})
export class AddGamesComponent implements OnInit {
  @Input() game : Game;

  notEditable: boolean = true;
  buttonText: string = "Save";

  constructor(private gameService : GamesService) {
    this.game = new Game("","","","",0,"");
   }

  ngOnInit(): void {
  }

  onSubmit(details : NgForm){
    if(this.notEditable){
      this.notEditable = false;
      this.buttonText = "Save";
    }else{
      this.notEditable = true;
      this.buttonText = "Amend";
    
    for(let key in details.value){
      if(details.value[key].length != 0 ){
        (this.game as any)[key] = details.value[key];
      } 
  }
  console.log("Game = ", this.game);
  this.gameService.saveGame(this.game);
  	}
  }

  new(){
    this.notEditable = false;
    this.buttonText = "Save";
    this.game = new Game("","","","",0,"");
  }

}
