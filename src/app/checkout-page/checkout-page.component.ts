import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Game } from '../dto/Game';
import { Order } from '../dto/Order';
import { User } from '../dto/User';
import { GamesService } from '../games.service';
import { OrdersService } from '../orders.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit 
{

  user: User = new User("","","","","",new Date(),"","",new Date());
  game : Game = new Game("","","","",0,"");
  order: Order = new Order("",0,0,new Date);
  gameId!: string;
  gamePrice!: number;
  private sub : any;
  gameQty!:number;
  totalPrice!:number;

  //total: number;

  constructor(public gameService:GamesService, private ordersService:OrdersService, private usersService: UsersService, private route: ActivatedRoute) 
  {  
    this.sub = this.route.params.subscribe(params =>
      {
        this.gameId = params['gameId'];
        this.gameService.getGame(this.gameId).pipe(tap((g)=>{this.game = g})).subscribe();
      });

    this.gameQty = this.ordersService.getQty();

    this.usersService.getUser().subscribe((data)=>{this.user = data});
  }


  ngOnInit(): void 
  {
    this.totalPrice = this.game.gamePrice*this.gameQty;
    console.log(this.game.gamePrice);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

