import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  clickCounter:number = 1;
  isHover = 'no';

  constructor() { }

  ngOnInit(): void {
  }

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
