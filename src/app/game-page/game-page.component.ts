import { Component, OnInit, Input, EventEmitter, Output, NgModule } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Game } from '../dto/Game';
import { GamesService } from '../services/games.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { OrdersService } from '../services/orders.service';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from '../services/shopping-cart.service';


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  //qty!: number;
  defaultQty: number = 1;
  maxQty!: number;
  gameId!: string;
  game: Game = new Game("","","","",0,"");
  private sub : any;
  noStock = false;
  buttonText = "Add to Cart"; 
  result = false;
  
  constructor(private gameService: GamesService, private route: ActivatedRoute, private cartService:ShoppingCartService)
  {
    this.sub = this.route.params.subscribe(params => {
      this.gameId = params['gameId'];
      console.log("GameId: ", this.gameId);
      this.gameService.getGame(this.gameId).pipe(tap((g)=>{this.game = g})).subscribe();
    });

    this.gameService.getKeysCount(this.gameId).subscribe((num) =>
    {
      this.maxQty = num;

      if(this.maxQty == 0)
      {
        this.buttonText = "Out of Stock";
        this.noStock = true;
      };
      console.log("callback, g= ",num);
    });

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

}
