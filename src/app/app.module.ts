import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { Character_pageComponent } from './pages/character/character_page.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { MapComponent } from './components/map/map.component';
import { MapPageComponent } from './pages/map-page/map-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    CharacterComponent,
    Character_pageComponent,
    CharacterDetailsComponent,
    MapComponent,
    MapPageComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
