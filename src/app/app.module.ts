import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameDisplayComponent } from './game-display/game-display.component';
import { GameListComponent } from './game-list-page/game-list-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from './auth.interceptor';
import { FormsModule } from '@angular/forms';
import { GenresSelectComponent } from './genres-select/genres-select.component';
import { AddGamesComponent } from './add-games/add-games.component';
import { AddGamesPageComponent } from './add-games-page/add-games-page.component';
import { GenreFilterPipe } from './genre-filter.pipe';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerProfilePageComponent } from './customer-profile-page/customer-profile-page.component';
import { GameComponent } from './game/game.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { OrdersComponent } from './orders/orders.component';
import { PlacedOrderComponent } from './placed-order/placed-order.component';
import { OrdersUserComponent } from './orders-user/orders-user.component';


@NgModule({
  declarations: [
    AppComponent,
    GameDisplayComponent,
    GameListComponent,
    GamePageComponent,
    NavMenuComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    GenresSelectComponent,
    AddGamesComponent,
    AddGamesPageComponent,
    GenreFilterPipe,
    CheckoutPageComponent,
    CustomerProfileComponent,
    CustomerProfilePageComponent,
    GameComponent,
    OrdersPageComponent,
    OrdersComponent,
    PlacedOrderComponent,
    OrdersUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true},
    GenresSelectComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
