import { Component, OnInit } from '@angular/core';
import { MapsService } from '../../../services/maps.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  maps = [];
  imageURL = 'http://localhost:3000/';

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
}
