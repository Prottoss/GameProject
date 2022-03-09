import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './dto/Order';
import { Subject,Observable } from 'rxjs';
import { GamesService } from './games.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  quantity!: number;

  orders : Order[]=[];
  myDate =  new Date();
  id!: string;
  qty!: number;
  username!: string;

  url: string = "https://nyyvg3k62g.execute-api.us-east-1.amazonaws.com/stage-2";


  constructor(private http: HttpClient, gameService:GamesService, userService:UsersService) {
    //this.orders.push(new Order("1", 90.00, 1, this.myDate));
    //this.orders.push(new Order("2", 10.00, 3, this.myDate));
    //this.orders.push(new Order("3", 20.00, 5, this.myDate));
  }

  setQty(qty: number)
  {
    this.quantity = qty;
  }
  getQty()
  {
    return this.quantity;
  }

  makeOrder(id:string, qty:number, username: string)
  {
    return this.http.post<string>(this.url+"/placeOrder?gameId="+id+"&qty="+qty+"&username="+username,null).subscribe((o: string) =>
    {
      console.log("callback, g= ",o);
    });
  }


   getOrderss()
   {
    // return this.http.get<Order[]>(this.url+"/getOrders").pipe(tap((o)=>{this.orders = o}));
   }

   getOrders() {
    return this.orders;
  }

   getOrder(id:number)
   {
     //return this.http.get<Order>(this.url+"/getOrders?orderID="+id);
   } 
}
