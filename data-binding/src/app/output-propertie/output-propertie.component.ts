import { Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-output-propertie',
  templateUrl: './output-propertie.component.html',
  styleUrls: ['./output-propertie.component.css']
})
export class OutputPropertieComponent implements OnInit {

  @Input() valor = 0

  @Output() mudouValor = new EventEmitter()

  @ViewChild('campoInput', {
    static: true
  }) valorDoInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  incrementa() {
    this.valorDoInput.nativeElement.value++
    this.mudouValor.emit({ novoValor: this.valor })
  }
  decrementa() {
    this.valorDoInput.nativeElement.value--
    this.mudouValor.emit({ novoValor: this.valor })
  }

}
