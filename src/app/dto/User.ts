import { Order } from "./Order";

export class User
{
    userID:string;
    userName: string;
    userSurname: string;
    userEmail: string;
    userDOB: Date;
    userType: string;
    userAccountCreated:Date;
    userOrders: Order[];

    public constructor (uId: string, uName:string, uSurname: string, uEmail:string, uDOB:Date, uType:string,uAccountCreated: Date)
    {
        this.userID = uId;
        this.userName = uName;
        this.userSurname = uSurname;
        this.userEmail = uEmail;
        this.userDOB = uDOB;
        this.userType = uType;
        this.userAccountCreated = uAccountCreated;
        this.userOrders = [];
    }
}