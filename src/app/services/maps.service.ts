import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient )  { }
  async getAllMaps(){
    return this.http.get(AppComponent.url +'/combatmaps');
  }
}
