import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-getcharacter',
  templateUrl: './getcharacter.component.html',
  styleUrls: ['./getcharacter.component.css']
})
export class GetcharacterComponent {
  readonly ROOT_URL = 'http://localhost:3000/character/6009844297ed6d29a1592f97';
  characters: any;

  constructor(private http: HttpClient) {
  }

  getCharacter() {
    this.characters = this.http.get(this.ROOT_URL);
  }
}
