import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Genre } from '../dto/Genre';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-genres-select',
  templateUrl: './genres-select.component.html',
  styleUrls: ['./genres-select.component.css']
})
export class GenresSelectComponent implements OnInit {

  genres : Genre[] = [];
  //genre!: Genre;
  selGenre!: string;
  //gamesGenre: string = "";

  @Output() public selected = new EventEmitter<any>();
  
  constructor(public genreService : GenresService) { }

  ngOnInit(): void{
    //this.genres = this.genreService.getGenres();//.subscribe((data: Genre[])=>{this.genres = data});
    //this.customers = this.custService.getCustomers();
    //this.selected.emit(this.customers[0]);
  }

  selectedGenre(genreName : string)
  {
    console.log(genreName);
    return this.selGenre = genreName;
    let selGenre: Genre = this.genres.filter((g)=>{return g.genreName == genreName;})[0];
    this.selected.emit(selGenre);
    console.log(this.selGenre);
  }

}
