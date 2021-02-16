import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://angular.io/';
  urlImagem = 'https://picsum.photos/400/200';
  valorAtual = ''
  valorSalvo: string
  isMouseOver = false
  getValor() {
    return 1
  }

  cursoAngular = true

  getCurtirCurso() {
    return true
  }
  botaoClicado() {
    alert()
  }
  onKeyUp(evento: KeyboardEvent) {
    let teclaPressionada = (<HTMLInputElement>evento.target).value
    this.valorAtual = teclaPressionada
  }
  salvarValor(valor) {
    this.valorSalvo = valor
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
    // negando o valor
  }

  constructor() { }

  ngOnInit() {
  }

}
