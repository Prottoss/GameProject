import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../dto/User';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-customer-profile-page',
  templateUrl: './customer-profile-page.component.html',
  styleUrls: ['./customer-profile-page.component.css']
})
export class CustomerProfilePageComponent implements OnInit {

  user: User = new User("","","","","",new Date(),"","",new Date());
  selectedFile!: File;
  url: string = "https://nyyvg3k62g.execute-api.us-east-1.amazonaws.com/stage-2";

  constructor(public usersService:UsersService,  private http: HttpClient) { }

  ngOnInit(): void {
    this.usersService.getUser().subscribe((data)=>{this.user = data});
  }

  onFileSelected(event: any)
  {
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }

  onUpload()
  {
    let fd = new FormData();
    //fd.append("image",this.selectedFile,this.selectedFile.name);
    this.http.post(this.url+"/uploadFile",this.selectedFile).subscribe(res=>{console.log(res)});
  }

  

}
