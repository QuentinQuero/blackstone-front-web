import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppComponent} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }

  async getAllStarships(){
    return this.http.get(AppComponent.url + '/starship');
  }

  async getStarshipsById(id){
    return this.http.get(AppComponent.url + '/starship/' + id);
  }

}
