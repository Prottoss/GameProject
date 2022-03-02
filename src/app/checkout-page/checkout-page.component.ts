import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../dto/User';
import { GamesService } from '../games.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  user!: User;

  constructor(public gameService:GamesService, private usersService: UsersService) 
  { 
    

  }

  ngOnInit(): void {
    this.usersService.getUser().subscribe((data)=>{this.user = data}); 
  }

}
