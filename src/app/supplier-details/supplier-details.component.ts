import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../dto/Game';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {

  @Input()game: Game;
  
  constructor(private gameService : GamesService) {
    this.game = Game.generateEmptyGame();
   }

  ngOnInit(): void {
  }

}
