import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Game } from '../dto/Game';
import { GamesService } from './games.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public cartList: any = [];
  public qty: number = 0;
  //game: Game = new Game("","","","",0,"");
  public gamesList = new BehaviorSubject<any>([]);

  constructor(public gameService:GamesService) { }

  getProducts(){
    return this.gamesList.asObservable();
  }

  setProduct(game: any)
  {
    this.cartList.push(game);
    this.gamesList.next(game);
  }

  addToCart(game: any)
  {
    this.cartList.push(game);
    this.gamesList.next(this.cartList);
    this.getTotalPrice();
    console.log(this.cartList);
  }

  getTotalPrice(): number
  {
    let finalTotal = 0;
    this.cartList.map((a: any)=>{
      finalTotal += a.total;
    })
    return finalTotal;
  }

  removeCartItem(product: any)
  {
    this.cartList.map((a:any, index:any)=>{
      if(product.id===a.id)
      {
        this.cartList.splice(index,1);
      }
    })
    this.gamesList.next(this.cartList);
  }

  emptyCart()
  {
    this.cartList = []
    this.gamesList.next(this.cartList);
  }
}
