import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Game } from '../dto/Game';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-genres-select',
  templateUrl: './genres-select.component.html',
  styleUrls: ['./genres-select.component.css']
})
export class GenresSelectComponent implements OnInit {

  @Output() chosenGenreEvent = new EventEmitter<string>();
  chosenGenre = "";

  constructor(public genresService: GenresService) { }

  ngOnInit(): void {
    this.chosenGenreEvent.emit(this.chosenGenre);
    
  }

  onGenreChanged(genreChangeEvent: Event){
    this.chosenGenre = (<HTMLInputElement>genreChangeEvent.target).value;
    this.chosenGenreEvent.emit(this.chosenGenre);
  }



}
