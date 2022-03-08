import { Game } from "./Game";
import { OrderItem } from "./OrderItem";

export class Order
{
    orderID: string;
    orderDate: Date;
    orderPrice: number;
    orderItem: OrderItem[];

    constructor (oId: string, oPrice: number, oDate:Date)
    {
        this.orderID = oId;
        this.orderDate = oDate;
        this.orderPrice = oPrice;
        this.orderItem = [];
    }
}