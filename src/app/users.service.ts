import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './dto/User';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[]=[];

  url: string = "https://nyyvg3k62g.execute-api.us-east-1.amazonaws.com/stage-2";

  constructor(private http: HttpClient)
  { 

  }

  getUsers()
  {
    return this.http.get<User[]>(this.url+"/getUsers").pipe(tap((u)=>{this.users = u}));
  }
}
