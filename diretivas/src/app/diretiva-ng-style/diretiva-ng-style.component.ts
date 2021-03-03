import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-style',
  templateUrl: './diretiva-ng-style.component.html',
  styleUrls: ['./diretiva-ng-style.component.css']
})
export class DiretivaNgStyleComponent implements OnInit {

  public ativo: boolean = false;
  public tamanhoFonte: number = 12

  constructor() { }

  ngOnInit() {
  }

  public mudarAtivo() {
    this.ativo = !this.ativo
  }

}
