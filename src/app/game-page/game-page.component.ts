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
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  @Input() games : Game;  
  gameComment : Game[] =[];
  selectedGameComment: Game = Game.generateEmptyGame();

  apiurl: string = "https://brkcs5lal5.execute-api.us-east-1.amazonaws.com/production/v4/games";

  newGameID : string = "";
  comments : string = "";
  loopedComments :Comments[] = [];
  apiGame!:any;
  screens: string[] = [];

  defaultQty: number = 1;
  maxQty!: number;
  gameId!: string;
  game: Game = Game.generateEmptyGame();
  loaded : boolean = false;
  commentId! : string;
  comment: Comments = Comments.generateEmptyComment();
  private sub : any;
  private subComments : any;

  noStock = false;
  buttonText = "Add to Cart"; 
  result = false;

  slideIndex = 1;
  
  constructor(private gameService: GamesService, private route: ActivatedRoute, private cartService:ShoppingCartService, private commentService:CommentsService, private http: HttpClient)
  {
    this.sub = this.route.params.subscribe(params => {
      this.gameId = params['gameId'];
      this.newGameID = this.gameId;
      console.log("GameId: ", this.gameId);
      this.gameService.getGame(this.gameId).pipe(tap((g)=>{
        this.game = g;
        this.loaded=true;
        
        let body = 'search "'+g.gameName+'"; limit 1; fields name, screenshots.url;';

        this.http.post(this.apiurl, body).subscribe((res:any)=>{
          let g = res[0]["screenshots"];
          let rep = /thumb/gi;

          for(let i = 0; i<g.length; i++)
          {
            let y = g[i]["url"].replace(rep,"1080p");
            this.screens.push(y); 
          };
          console.log(this.screens);
        });
      })).subscribe();
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
      this.gameId = params['gameId'];
      console.log("GameID: ", this.gameId);
      this.commentService.getComments(this.gameId).subscribe((data)=>{
        this.loopedComments = data
        console.log("pepepe",data)  
      })
    });

    this.games = Game.generateEmptyGame();

  }

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
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

  addComments(){
    if(this.comments=="")
      alert("Please Enter Comment");
    else{
      var toAdd = this.comments;
      console.log("This GameID: ", this.game.gameID);     
      this.gameService.addComments(this.game.gameID, toAdd).subscribe();
      console.log("Comment added was: "+ toAdd); 
      this.comments = ""
    }
  }

  plusSlides(n:any)
  {
    this.showSlides(this.slideIndex += n);
  }

  showSlides(n:any)
  {
    let i;
    let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;

    if (n > slides.length)
    {
      this.slideIndex = 1
    }
    if(n < 1)
    {
      this.slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++) 
    {
      slides[i].style.display = "none";
    }
    slides[this.slideIndex-1].style.display = "block";
  }

  

}


