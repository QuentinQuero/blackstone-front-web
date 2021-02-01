import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static imagesUrl = AppComponent.url + '/static';
  static url = 'http://localhost:3000';
  logoURL = 'http://localhost:3000/static/image/logo/blackstone-fortress.png'
  title = 'blackstone-front-web';
}
