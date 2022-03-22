import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
 
  public totalCartAmount: number = 0;

  constructor(public auth:AuthService, private cartService: ShoppingCartService) 
  {

  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(res=>
    {
      this.totalCartAmount = res.length;
    })

  }

}
