import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-propertie',
  templateUrl: './input-propertie.component.html',
  styleUrls: ['./input-propertie.component.css']
})
export class InputPropertieComponent implements OnInit {

  @Input('nome') nomeCurso: string =''

  constructor() { }

  ngOnInit() {
  }

}
