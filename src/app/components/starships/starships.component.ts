import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StarshipsService} from '../../services/starships.service';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starship = [];
  URL = AppComponent.imagesUrl;

  constructor(private http: HttpClient, private starshipService: StarshipsService) { }

  ngOnInit(): void {
    this.getAllStarships();
  }

  async getAllStarships() {
    (await this.starshipService.getAllStarships()).subscribe(data => {
      // @ts-ignore
      console.log(data.data);
      // @ts-ignore
      this.starship = data.data;
    });
  }
  async getStarshipsById(id){
    (await this.starshipService.getStarshipsById(id)).subscribe(data => {
      // @ts-ignore
      this.starship = data.data;
    });
  }
}
