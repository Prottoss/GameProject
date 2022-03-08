import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Game } from '../dto/Game';
import { User } from '../dto/User';
import { GamesService } from '../games.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit 
{

  user: User = new User("","","","","",new Date(),"","",new Date());
  game : Game = new Game("","","","",0,"");
  gameId!: string;
  gamePrice!: number;
  private sub : any;

  //total: number;

  constructor(public gameService:GamesService, private usersService: UsersService, private route: ActivatedRoute) 
  {  

  }

  ngOnInit(): void 
  {
    this.usersService.getUser().subscribe((data)=>{this.user = data});

    this.sub = this.route.params.subscribe(params =>
    {
      this.gameId = params['gameId'];
      console.log("GameId: ", this.gameId);
      this.gameService.getGame(this.gameId).pipe(tap((g)=>{this.game = g})).subscribe();
    });

    //this.total += this.game.gamePrice;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}