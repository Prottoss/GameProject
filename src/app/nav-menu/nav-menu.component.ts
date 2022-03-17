import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
 
  constructor(public auth:AuthService, private cartService: ShoppingCartService) { }

  public totalCartAmount: number = 0;
  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.totalCartAmount = res.length;
    })

  }

}
