export class Game{
    gameId : string;
    gameName : string;
    gameDescription : string;
    gameGenre: string;
    gamePrice: number;
    gamePic: string;

    constructor(gameId : string, gameName : string, gameDescription : string, gameGenre: string, gamePrice: number, gamePic: string){
        this.gameId = gameId;
        this.gameName = gameName;
        this.gameDescription = gameDescription;
        this.gameGenre = gameGenre;
        this.gamePrice = gamePrice;
        this.gamePic = gamePic;
    }

}