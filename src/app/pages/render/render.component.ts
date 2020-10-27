import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss']
})
export class RenderComponent implements OnInit {

  author:string = 'Joni';

  constructor() { }

  ngOnInit(): void {
  }

}
