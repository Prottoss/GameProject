import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../dto/Game';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  @Input() game! : Game;
  
  constructor() { }

  ngOnInit(): void {
  }

}
