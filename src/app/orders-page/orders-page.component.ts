import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Order } from '../dto/Order';
import { OrdersService } from '../orders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {

  orderId!: number;
  orders: Order = new Order("", 0,0, new Date());
  private sub : any;

  constructor(private orderService: OrdersService, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.orderId = params['orderID'];
      console.log("OrderId: ", this.orderId);
      //this.orderService.getOrder(this.orderId).pipe(tap((o)=>{this.orders = o})).subscribe();
   });
  }

  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
