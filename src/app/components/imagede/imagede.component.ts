import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagede',
  templateUrl: './imagede.component.html',
  styleUrls: ['./imagede.component.css']
})
export class ImagedeComponent implements OnInit {

  @Input() imagede;
  @Input() imageURL;
  constructor() { }

  ngOnInit(): void {
  }

}
