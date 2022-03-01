import { Component, OnInit } from '@angular/core';
import { User } from '../dto/User';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  userName = "Bob";
  userSurname = "bibi";
  userEmail = "lolollo@lolol.lol"

  constructor() { }

  ngOnInit(): void {
    
  }

}
