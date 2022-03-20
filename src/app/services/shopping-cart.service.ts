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
  public gamesList = new BehaviorSubject<any>([]);
  public game: Game = new Game("","","","",0,"");

  constructor(public gameService:GamesService) { }

  getProducts(){
    return this.gamesList.asObservable();
  }

  setProduct(game: any)
  {
    this.cartList.push(game);
    this.gamesList.next(game);
  }

  addToCart(game: Game)
  {
    this.cartList.push(game);
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

  removeCartItem(product: Game)
  {
    // this.cartList.map((a:any, index:any)=>{
    //   if(product.id===a.id)
    //   {
    //     this.cartList.splice(index,1);
    //   }
    // })

    for(var i = 0; i< this.cartList.length; i++)
    {
      if(this.cartList[i].gameID == product.gameID)
      {
        this.cartList.splice(i,1);
      }
    }
    this.gamesList.next(this.cartList);
  }

  emptyCart()
  {
    this.cartList = []
    this.gamesList.next(this.cartList);
  }
}
