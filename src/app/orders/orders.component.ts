import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Order } from '../dto/Order';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @Output() orders: EventEmitter<Order> = new EventEmitter<Order>();

  order : Order[] = [];
  selectedOrder : Order = new Order("",0,0, new Date());
  searchText : string = "";

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.order = this.orderService.getOrders();
    this.orders.emit(this.order[0]);
  }

  selected(order : Order){
    console.log("Selected = "+ order)
    this.selectedOrder = order;
    this.orders.emit(order);
  }

}
