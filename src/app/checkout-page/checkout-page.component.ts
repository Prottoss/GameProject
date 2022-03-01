import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../dto/User';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  loggedIn = localStorage.getItem("username");

  constructor(public gameService:GamesService, public auth:AuthService) 
  { 
    

  }

  ngOnInit(): void {
    
  }

}
