import { Component, OnInit } from '@angular/core';
import {CharacterService} from "../../services/character.service";
import {AppComponent} from "../../app.component";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {log} from "util";
import {addWarning} from "@angular-devkit/build-angular/src/utils/webpack-diagnostics";

@Component({
  selector: 'app-character-list-page',
  templateUrl: './character-list-page.component.html',
  styleUrls: ['./character-list-page.component.css']
})
export class CharacterListPageComponent implements OnInit {

  characters = [];
  imageURL = 'http://localhost:3000/static';

  constructor(private http: HttpClient, private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  async getAllCharacters() {
    (await this.characterService.getAllCharaters()).subscribe(data => {
      //@ts-ignore
      this.characters = data.data;
    });
  }

}
