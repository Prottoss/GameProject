import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../dto/User';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @Output() userOrder: EventEmitter<User> = new EventEmitter<User>();

  users : User[] =[];
  selectedOrder : User = new User("","","","","",new Date(),"","",new Date());
  searchText : string = "";

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe( (data)=>{
      this.users = data;
      console.log(data[0].username);
      console.log(data[0].userOrders);
    } );
  }

  selected(order : User){
    console.log("Selected = "+ order)
    this.selectedOrder = order;
    this.userOrder.emit(order);
  }

}
