import { Game } from "./Game";

export class Order
{
    orderID: string;
    orderPrice: number;
    orderQuantity: number;
    orderTotal: number;
    orderGames: Game[];

    constructor (oId: string, oPrice: number, oQuantity: number, oTotal:number)
    {
        this.orderID = oId;
        this.orderPrice = oPrice;
        this.orderQuantity = oQuantity;
        this.orderTotal = oTotal;
        this.orderGames = [];
    }
}