import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Game } from '../dto/Game';
import { Order } from '../dto/Order';
import { User } from '../dto/User';
import { GamesService } from '../services/games.service';
import { OrdersService } from '../services/orders.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit 
{

  public games: Game[] = [];
  gameIds: string[] = [];
  public finalTotal: number = 0;
  user: User = new User("","","","","",new Date(),"","",new Date());
  order: Order = new Order("",0,0,new Date);
  gameId!: string;
  private sub : any;

  //total: number;

  constructor(public gameService:GamesService, private ordersService:OrdersService, private usersService: UsersService, private cartService: ShoppingCartService) 
  {  
    // this.sub = this.route.params.subscribe(params =>
    //   {
    //     this.gameId = params['gameId'];
    //     this.gameService.getGame(this.gameId).pipe(tap((g)=>{this.game = g})).subscribe();
    //   });

    //this.gameQty = this.ordersService.getQty();
    // this.cartService.getProducts().subscribe(res=>{
    //   this.games = res;
    //   this.finalTotal = this.cartService.getTotalPrice();
    // })
    // this.ordersService.getQty().subscribe(res=>{
    //   this.gameQty = res;
    //   console.log("res= "+res);
    //   console.log("qty= "+this.gameQty);
    // })

    this.usersService.getUser().subscribe((data)=>{this.user = data});

    this.cartService.getCart().subscribe(res=>{
      this.games = res;
      this.finalTotal = this.cartService.getTotalPrice();
    })
  }


  ngOnInit(): void 
  {
  }

  onBuy()
  {
    for(let key of this.games)
    {
      this.gameIds.push(key.gameID);
    }
    console.log(this.gameIds);

    console.log(this.user.username);
    console.log(this.ordersService.makeOrder(this.gameIds, this.user.username));
    this.cartService.emptyCart();
  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }

}

