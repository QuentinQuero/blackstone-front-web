import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefiComponent } from './exploration/defi/defi.component';
import { MapComponent } from './exploration/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    DefiComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
