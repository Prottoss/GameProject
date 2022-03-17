import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Game } from '../dto/Game';
import { Order } from '../dto/Order';
import { User } from '../dto/User';
import { GamesService } from '../services/games.service';
import { OrdersService } from '../services/orders.service';
import { UsersService } from '../services/users.service';

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

    //this.gameQty = this.ordersService.getQty();
    // this.cartService.getProducts().subscribe(res=>{
    //   this.games = res;
    //   this.finalTotal = this.cartService.getTotalPrice();
    // })
    this.ordersService.getQty().subscribe(res=>{
      this.gameQty = res;
      console.log("res= "+res);
      console.log("qty= "+this.gameQty);
    })

    this.usersService.getUser().subscribe((data)=>{this.user = data});
  }


  ngOnInit(): void 
  {
  }

  onBuy()
  {

    console.log(this.gameId);
    console.log(this.gameQty);
    console.log(this.user.username);
    console.log(this.ordersService.makeOrder(this.gameId,this.gameQty, this.user.username));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

