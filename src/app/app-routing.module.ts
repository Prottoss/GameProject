import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGamesPageComponent } from './add-games-page/add-games-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { CustomerProfilePageComponent } from './customer-profile-page/customer-profile-page.component';
import { GameListComponent } from './game-list-page/game-list-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrdersComponent } from './orders/orders.component';
import { PlacedOrderComponent } from './placed-order/placed-order.component';

const routes: Routes = [
  {path: "register", component: RegisterComponent},
  {path: "games", component: GameListComponent},
  {path: "gameinfo/:gameId", component: GamePageComponent},
  {path: "gameinfo/:gameId/checkout", component: CheckoutPageComponent },
  {path: "addGames", component: AddGamesPageComponent},
  {path: "profile", component: CustomerProfilePageComponent},
  {path: "logout", component: LoginComponent},
  {path: "orders", component: OrdersComponent},
  {path: "placedOrder", component: PlacedOrderComponent},
  {path: "", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
