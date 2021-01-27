import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blackstone-front-web';
  logoURL = 'http://localhost:3000/static/image/logo/blackstone-fortress.png'
  static url = 'http://localhost:3000';
}
