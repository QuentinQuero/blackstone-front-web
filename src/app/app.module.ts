import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefiComponent } from './exploration/defi/defi.component';
import { MapComponent } from './exploration/map/map.component';
import { CharacterComponent } from './character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    DefiComponent,
    MapComponent
    AppComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
