import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefiComponent } from './exploration/defi/defi.component';
import { MapComponent } from './exploration/map/map.component';
import { CharacterComponent } from './character/character.component';
import { Character_pageComponent } from './pages/character/character_page.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DefiComponent,
    MapComponent
    AppComponent,
    CharacterComponent
    Character_pageComponent,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
