import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Character_pageComponent } from './pages/character/character_page.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterListPageComponent } from './pages/character-list-page/character-list-page.component';
import {CharacterCardComponent} from "./components/character-card/character-card.component";
import { ChallengeComponent } from './components/exploration/challenge/challenge.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    Character_pageComponent,
    CharacterDetailsComponent,
    CharacterCardComponent,
    CharacterListPageComponent
    ChallengeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
