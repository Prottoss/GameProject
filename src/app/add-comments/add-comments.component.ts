import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Game } from '../dto/Game';
import { GamesService } from '../services/games.service';
import { Comments } from '../dto/Comments';

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['./add-comments.component.css']
})
export class AddCommentsComponent implements OnInit {

  @Input() comments : Comments;
  game : Game;
  comment : string = "";


  constructor(private gameService : GamesService) {
    this.comments = Comments.generateEmptyComment()
    this.game = Game.generateEmptyGame();
  }

  ngOnInit(): void {
  }

  addComments(){
    if(this.game.gameID=="")
      alert("Please select a game!");
    else if(this.comment=="")
      alert("Please Enter Comment");
    else{
      var toAdd = this.comment;
      this.gameService.addComments(this.game.gameID, toAdd).subscribe();
      this.comment = ""
    }
  }

}