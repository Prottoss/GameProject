import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../dto/User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-orders-user',
  templateUrl: './orders-user.component.html',
  styleUrls: ['./orders-user.component.css']
})
export class OrdersUserComponent implements OnInit {

  user: User = new User("","","","","",new Date(),"","",new Date());

  constructor(public usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getUser().subscribe((data)=>{this.user = data});
  }

}