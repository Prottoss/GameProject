import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './dto/Order';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orders : Order[]=[];

  url: string = "https://nyyvg3k62g.execute-api.us-east-1.amazonaws.com/stage-2";

  //constructor(private http: HttpClient) {

   //}


   constructor() {
    this.orders.push(new Order("1",90.00,1,90.00));

    this.orders.push(new Order("2",10.00, 2,20.00));

    this.orders.push(new Order("3",20.00,3,60.00));
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
