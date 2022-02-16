import { Injectable } from '@angular/core';
import { Genre } from './dto/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  genres : Genre[]=[];

  constructor() { 
    // dummy genres
    this.genres.push(new Genre(0,"Racing", "genre desc 1"));
    this.genres.push(new Genre(1,"MMO", "genre desc 2"));
    this.genres.push(new Genre(2,"Action", "genre desc 3"));
    this.genres.push(new Genre(3,"Adventure", "genre desc 4"));
  }

  getGenres(){
    return this.genres;
  }
}
