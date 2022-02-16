import { Component, OnInit } from '@angular/core';
import { Genre } from '../dto/Genre';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  selectedGenre!: Genre;
  
  constructor() { }

  ngOnInit(): void {
  }

  getGenres(genre: Genre)
  {
    this.selectedGenre = genre;
  }

}
