import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Game } from '../dto/Game';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-genres-select',
  templateUrl: './genres-select.component.html',
  styleUrls: ['./genres-select.component.css']
})
export class GenresSelectComponent implements OnInit {

  chosenGenre: string = "";

  constructor(public genresService: GenresService) { }

  ngOnInit(): void {
  }

  selectedGenre(genreName: string)
  {
    this.chosenGenre = genreName;
    console.log(this.chosenGenre);
  }

}
