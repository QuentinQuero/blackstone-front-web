import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { Character_pageComponent } from './pages/character/character_page.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { MapComponent } from './components/map/map.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterListPageComponent } from './pages/character-list-page/character-list-page.component';
import {CharacterCardComponent} from "./components/character-card/character-card.component";

import { ChallengeCardsComponent } from './components/exploration/challenge-cards/challenge-cards.component';
import {ChallengesComponent} from "./pages/exploration/challenges/challenges.component";

import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    CharacterComponent,
    Character_pageComponent,
    CharacterDetailsComponent,
    MapComponent,
    MapPageComponent
    CharacterCardComponent,
    CharacterListPageComponent,
    ChallengeCardsComponent,
    ChallengesComponent
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
