import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-propertie',
  templateUrl: './output-propertie.component.html',
  styleUrls: ['./output-propertie.component.css']
})
export class OutputPropertieComponent implements OnInit {

  @Input() valor = 0

  @Output() mudouValor = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  incrementa() {
    this.valor++
    this.mudouValor.emit({ novoValor: this.valor })
  }
  decrementa() {
    this.valor--
    this.mudouValor.emit({ novoValor: this.valor })
  }

}
