import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  clickCounter:number = 1;
  participants = ['Joni', 'Manuel', 'Juan', 'Elias'];

  constructor() { }

  ngOnInit(): void {
  }

}
