import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capacitacion-angular';
  author = 'Joni';
  clickCounter = 1;
  isHover = 'no';
  participants = ['Joni', 'Manucho', 'Juan', 'Elias'];

  clickme() {
    this.clickCounter++;
  }

  hoverIn() {
    this.isHover = 'yes';
  }
  
  hoverOut() {
    this.isHover = 'no';
  }

}
