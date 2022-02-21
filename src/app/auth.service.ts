import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static url: string = "https://nyyvg3k62g.execute-api.us-east-1.amazonaws.com/stage-2";


  constructor(private http: HttpClient) { };


  login(username:string, password:string) 
  {
    return this.http.post(AuthService.url +"/login", {"username":username, "password":password})
    .pipe( tap( (res:any)=>
    {
      console.group("AuthService Login response = ",res);
      if(res['success']==true)
      {
        const token = res['data']['id_token'];
        console.log("Login Successful id_token =",token);
        localStorage.setItem('id_token', token);
        localStorage.setItem('refresh_token',res['data']['refresh_token']);
      }else{
        alert("Login Failed: " + res['Msg']);
      }
    }));
  }


  logout(){
    localStorage.removeItem('id_token');
    localStorage.removeItem('refresh_token');
  }

  isLoggedIn() : boolean{
    return localStorage.getItem('id_token') != null;
  }

}
