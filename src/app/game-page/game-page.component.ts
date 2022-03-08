import { Component, OnInit, Input, EventEmitter, Output, NgModule } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Game } from '../dto/Game';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { OrdersService } from '../orders.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  qty!: number;
  maxQty!: number;
  gameId!: string;
  game: Game = new Game("","","","",0,"");
  private sub : any;
  
  
  constructor(private gameService: GamesService, private orderService:OrdersService, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.maxQty = 10;
    //this.maxQty = this.gameService.getKeysCount(); //requers a call to check count of keys available per game(coming from Games.Service).

    this.sub = this.route.params.subscribe(params => {
      this.gameId = params['gameId'];
      console.log("GameId: ", this.gameId);
      this.gameService.getGame(this.gameId).pipe(tap((g)=>{this.game = g})).subscribe();
   });
  }

  onPlaceOrder(value : number)
  {
    this.qty = value;
    this.orderService.setQty(this.qty);
    console.log(this.qty)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
