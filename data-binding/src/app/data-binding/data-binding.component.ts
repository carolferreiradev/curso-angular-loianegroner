import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://angular.io/';
  urlImagem = 'https://picsum.photos/400/200'
  getValor() {
    return 1
  }

  cursoAngular = true

  getCurtirCurso() {
    return true
  }

  constructor() { }

  ngOnInit() {
  }

}
