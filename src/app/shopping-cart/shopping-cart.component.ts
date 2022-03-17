import { Component, OnInit } from '@angular/core';
import { Game } from '../dto/Game';
import { GameComponent } from '../game/game.component';
import { GamesService } from '../games.service';
import { OrdersService } from '../orders.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public games: Game[] = [];
  public finalTotal: number = 0;
  public maxQty: number = 0;

  constructor(private cartService: ShoppingCartService, public gameService: GamesService, public orderService: OrdersService) { }

  ngOnInit(): void {
    this.orderService.getQty().subscribe(res=>{
      this.maxQty = res;
    });
    this.cartService.getProducts().subscribe(res=>{
      this.games = res;
      console.log("res= "+this.games);
      this.finalTotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(item: any)
  {
    this.cartService.removeCartItem(item);
  }

  emptyCart()
  {
    this.cartService.emptyCart();
  }

}
