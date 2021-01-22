import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppComponent} from "../app.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  async getAllCharaters(){
    return this.http.get(AppComponent.url + '/character');
  }

  async getOneCharacter(id){
    return this.http.get(AppComponent.url + '/character/' + id);
  }

}
