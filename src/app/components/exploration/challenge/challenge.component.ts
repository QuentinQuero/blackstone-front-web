import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})

export class ChallengeComponent implements OnInit {

  @Input () challenge;

  constructor(private httpClient: HttpClient) { }

  datas = [];

  ngOnInit(): void {
    this.httpClient.get<any>('http://localhost:3000/challenges/')
      .subscribe((result: any[]) => {
        //@ts-ignore
        this.datas = result.data;
        console.log(this.datas)
      });
  }
}
