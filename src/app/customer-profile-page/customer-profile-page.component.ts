import { Component, OnInit } from '@angular/core';
import { User } from '../dto/User';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-customer-profile-page',
  templateUrl: './customer-profile-page.component.html',
  styleUrls: ['./customer-profile-page.component.css']
})
export class CustomerProfilePageComponent implements OnInit {

  user: User = new User("","","","","",new Date(),"","",new Date());
  
  constructor(public usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getUser().subscribe((data)=>{this.user = data});
  }

}
