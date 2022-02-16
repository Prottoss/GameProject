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
    AddGamesPageComponent
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
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
