import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterComponent } from './Page/character/character.component';
import { GetcharacterComponent } from './component/character/explorator/UR-025/getcharacter/getcharacter.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    GetcharacterComponent,
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
