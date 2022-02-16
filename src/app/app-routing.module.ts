import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGamesPageComponent } from './add-games-page/add-games-page.component';
import { GameListComponent } from './game-list-page/game-list-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "register", component: RegisterComponent},
  {path: "games", component: GameListComponent},
  {path: "addGames", component: AddGamesPageComponent},
  {path: "logout", component: LoginComponent},
  {path: "", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
