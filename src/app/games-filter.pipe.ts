import { Pipe, PipeTransform } from '@angular/core';
import { Game } from './dto/Game';

@Pipe({
  name: 'gamesFilter'
})
export class GamesFilterPipe implements PipeTransform {

  transform(game: Game[], gameGenre: string): Game[] {
    if(!game)return [];
    if(!gameGenre) return game;

    //gameName = gameName.toLowerCase();
    return game.filter((g: Game)=>{return g.gameGenre.match(gameGenre)});
  }

}
