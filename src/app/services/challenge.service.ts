import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppComponent} from "../app.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private http: HttpClient) { }

  async getChallenges(){
    return this.http.get(AppComponent.url + '/challenge');
  }

  async getChallengeById(id){
    return this.http.get(AppComponent.url + '/challenge/' + id);
  }

}
