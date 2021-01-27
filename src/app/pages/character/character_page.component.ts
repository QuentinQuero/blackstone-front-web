import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CharacterService} from "../../services/character.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-character',
  templateUrl: './character_page.component.html',
  styleUrls: ['./character_page.component.css']
})
export class Character_pageComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  character_id = '';
  characters = [];
  imageURL = 'http://localhost:3000/static';

  constructor(private route: ActivatedRoute, private http: HttpClient, private characterService: CharacterService) {
  }
  ngOnInit() {
    this.character_id = this.route.snapshot.params.id;
    this.getCharacterByIds();
  }

  async getCharacterByIds() {
    (await this.characterService.getOneCharacter(this.character_id)).subscribe(data => {
      // @ts-ignore
      console.log(data.data);
      // @ts-ignore
      this.characters = data.data;
    });
  }

}
