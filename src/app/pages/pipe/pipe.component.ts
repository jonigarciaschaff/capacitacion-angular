import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  today: Date = new Date;

  numberExample: number = 2;

  multiplicatorExample: number = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
