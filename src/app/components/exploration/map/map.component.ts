import { Component, OnInit } from '@angular/core';
import { MapsService } from '../../../services/maps.service';
import { HttpClient } from '@angular/common/http';
import {AppComponent} from '../../../app.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  maps = [];
  imageURL = AppComponent.url;
  mapSelected = null;

  constructor(private http: HttpClient, private mapsService: MapsService) {}

  ngOnInit(): void {
    this.getAllMaps();
  }
  async getAllMaps(){
    (await this.mapsService.getAllMaps()).subscribe(data => {
      // @ts-ignore
      this.maps = data.data;
    });
  }

  printMap(map){
    this.mapSelected = map;
  }

}
