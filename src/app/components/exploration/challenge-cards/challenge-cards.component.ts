import { Component, OnInit } from '@angular/core';
import { ChallengeService } from "../../../services/challenge.service";
import { HttpClient } from "@angular/common/http";
import {AppComponent} from "../../../app.component";


@Component({
  selector: 'app-challenge-cards',
  templateUrl: './challenge-cards.component.html',
  styleUrls: ['./challenge-cards.component.css']
})

export class ChallengeCardsComponent implements OnInit {

  challengesArray = [];
  imageURL = AppComponent.url;

  constructor(private http: HttpClient, private challengeService: ChallengeService) { }

  ngOnInit(): void {
    this.getChallenges();
  }

  async getChallenges() {
    (await this.challengeService.getChallenges()).subscribe(data => {
      //@ts-ignore
      this.challengesArray = data.data;
    });
  }
}
