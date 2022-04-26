import { Component, OnInit, Input, EventEmitter, Output, NgModule } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Game } from '../dto/Game';
import { User } from '../dto/User';
import { Comments } from '../dto/Comments';
import { GamesService } from '../services/games.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { OrdersService } from '../services/orders.service';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { CommentsService } from '../services/comments.service';


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  @Input() games : Game;  
  gameComment : Game[] =[];
  selectedGameComment: Game = Game.generateEmptyGame();

  defaultQty: number = 1;
  maxQty!: number;
  gameId!: string;
  game: Game = new Game("","","","",0,"");
  loaded : boolean = false;
  commentId! : string;
  comment: Comments = Comments.generateEmptyComment();
  private sub : any;
  private subComments : any;

  noStock = false;
  buttonText = "Add to Cart"; 
  result = false;
  
  constructor(private gameService: GamesService, private route: ActivatedRoute, private cartService:ShoppingCartService, private commentService:CommentsService)
  {
    this.sub = this.route.params.subscribe(params => {
      this.gameId = params['gameId'];
      console.log("GameId: ", this.gameId);
      this.gameService.getGame(this.gameId).pipe(tap((g)=>{this.game = g;this.loaded=true})).subscribe();
    });

    this.gameService.getKeysCount(this.gameId).subscribe((num) =>{
      this.maxQty = num;

      if(this.maxQty == 0)
      {
        this.buttonText = "Out of Stock";
        this.noStock = true;
      };
      console.log("callback, g= ",num);
    });

    this.subComments = this.route.params.subscribe(params => {
      this.commentId = params['commentID'];
      console.log("CommentId: ", this.commentId);
      this.commentService.getComment(this.commentId).pipe(tap((c)=>{this.comment = c})).subscribe();
    });

    // this.gameService.getApiDetails().subscribe((res) =>{
    //   console.log(res)
    // });

    this.games = Game.generateEmptyGame();
  }

  ngOnInit(): void {
  }

  addToCart(game: Game)
  {
    let result = this.cartService.addToCart(game);

    if(result)
    {
      this.buttonText = "Already in Cart";
      this.noStock = true;
    }
    result = false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getComment(Comment : Comments){
    this.comment = Comment;
  }

  selected(comment : Game){
    console.log("Selected = "+comment.gameComment)
    this.selectedGameComment = comment;    
  }

}
