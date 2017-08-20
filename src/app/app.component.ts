import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public height: number = window.innerHeight ;
  onResize(event) {
      this.height = window.innerHeight ;
  }
}
