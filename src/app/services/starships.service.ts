import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppComponent} from "../app.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }

  async getAllStarships(){
    return this.http.get(AppComponent.url + '/character');
  }

  async getOneStarships(id){
    return this.http.get(AppComponent.url + '/character/' + id);
  }

}
