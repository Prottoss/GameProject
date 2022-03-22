import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Game } from '../dto/Game';
import { GamesService } from './games.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public cartList: Game[] = [];
  public gamesList = new BehaviorSubject<any>([]);
  public game: Game = new Game("","","","",0,"");

  constructor(public gameService:GamesService) { }

  getCart(){
    this.cartList = JSON.parse(localStorage.getItem("cart")!);
    this.gamesList.next(this.cartList);
    return this.gamesList.asObservable();
  }

  addToCart(game: Game)
  {
    this.cartList.push(game);
    localStorage.setItem("cart",JSON.stringify(this.cartList));
    this.cartList = JSON.parse(localStorage.getItem("cart")!);
    this.gamesList.next(this.cartList);   
    this.getTotalPrice();
    console.log(this.cartList);
  }

  getTotalPrice(): number
  {
    let finalTotal = 0;
    this.cartList.map((g: Game)=>{
      finalTotal += g.gamePrice;
    })
    return finalTotal;
  }

  removeFromCart(product: Game)
  {
    for(var i = 0; i< this.cartList.length; i++)
    {
      if(this.cartList[i].gameID == product.gameID)
      {
        this.cartList.splice(i,1);
      }
    }
    localStorage.setItem("cart",JSON.stringify(this.cartList));
    this.gamesList.next(this.cartList);
  }

  emptyCart()
  {
    this.cartList = []
    this.gamesList.next(this.cartList);
    localStorage.setItem("cart",JSON.stringify(this.cartList));
  }
}
