import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // add this here: if logged in, redirect to main page, else:
    window.location.href="https://game-store-project.auth.us-east-1.amazoncognito.com/signup?client_id=3vide0n9rf77tv3nn10vpdq07p&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+profile&redirect_uri=localhost:4200";
  }

}
