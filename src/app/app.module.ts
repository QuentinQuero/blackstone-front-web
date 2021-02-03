import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Character_pageComponent } from './pages/character/character_page.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

import { MapComponent } from './components/exploration/map/map.component';
import { MapPageComponent } from './pages/exploration/map-page/map-page.component';

import { CharacterListPageComponent } from './pages/character-list-page/character-list-page.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { StarshipsPageComponent } from './pages/starships-page/starships-page.component';
import { CharacterCardComponent } from "./components/character-card/character-card.component";
import { HomeComponent } from './pages/home/home.component';
import { HomepersonnageComponent } from './components/homepersonnage/homepersonnage.component';
import { HomevaisseauComponent } from './components/homevaisseau/homevaisseau.component';
import { HomeexplorationComponent } from './components/homeexploration/homeexploration.component';
import { HomevideoComponent } from './components/homevideo/homevideo.component';
import { ExplorationComponent } from './pages/exploration/exploration.component';
import { ChallengeCardsComponent } from './components/exploration/challenge-cards/challenge-cards.component';
import { ChallengesComponent } from './pages/exploration/challenges/challenges.component';
import { ImagedeComponent } from './components/imagede/imagede.component';
import { ReglesdebaseComponent } from './pages/reglesdebase/reglesdebase.component';
import { ReglescombatComponent } from './pages/reglescombat/reglescombat.component';


@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    Character_pageComponent,
    CharacterDetailsComponent,
    MapComponent,
    MapPageComponent,
    CharacterCardComponent,
    StarshipsComponent,
    StarshipsPageComponent,
    ChallengesComponent,
    ChallengeCardsComponent,
    CharacterListPageComponent,
    HomeComponent,
    HomepersonnageComponent,
    HomevaisseauComponent,
    HomeexplorationComponent,
    HomevideoComponent,
    ExplorationComponent,
    ImagedeComponent,
    ReglesdebaseComponent,
    ReglescombatComponent
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
