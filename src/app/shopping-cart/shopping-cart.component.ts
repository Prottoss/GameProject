import { Component, OnInit } from '@angular/core';
import { Game } from '../dto/Game';
import { GameComponent } from '../game/game.component';
import { GamesService } from '../services/games.service';
import { OrdersService } from '../services/orders.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

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
    this.cartService.getProducts().subscribe(res=>{
      this.games = res;
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
