import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../dto/Game';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.css']
})
export class GameDisplayComponent implements OnInit {

  @Input() game!: Game;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
