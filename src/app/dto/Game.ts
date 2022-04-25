import { GameKey } from "./GameKey";
import { Comments } from "./Comments";

export class Game{
    gameID : string;
    gameName : string;
    gameDesc : string;
    gameGenre: string;
    gamePrice: number;
    gamePic: string;
    gameKeys: GameKey[];
    gameHidden : boolean=false;
    gameComment: Comments[];



    constructor(gameId : string, gameName : string, gameDescription : string, gameGenre: string, gamePrice: number, gamePic: string){
        this.gameID = gameId;
        this.gameName = gameName;
        this.gameDesc = gameDescription;
        this.gameGenre = gameGenre;
        this.gamePrice = gamePrice;
        this.gamePic = gamePic;
        this.gameKeys = [];
        this.gameComment = [];
    }

    static generateEmptyGame(){
        return new Game("", "", "", "", 0, "");
    }
}