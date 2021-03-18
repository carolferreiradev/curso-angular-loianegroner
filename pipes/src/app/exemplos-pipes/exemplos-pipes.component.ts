import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  public livro: any = {
    titulo: 'Estruturas de Dados e Algoritmos com JavaScript: Escreva um Código JavaScript Complexo e Eficaz Usando a Mais Recente ECMAScript',
    rating: 4.54321,
    numeroPaginas: 408,
    preco: 66.50,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://ler.amazon.com.br/kp/embed?asin=B07P6SZJVQ&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_EGN6WBR18AANJS2FQ4A2'
  };

  constructor() { }
  livros: string[] = ['Java', 'Angular 2'];

  filtro: string;

  addCurso(valor) {
    this.livros.push(valor);
    console.log(this.livros);
  }

  obterCursos() {

    if (this.livros.length === 0 || this.filtro === undefined
      || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter(
      v => v.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
    );
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor Assíncrono'), 2000);
  });

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor Assíncrono 2'));


  ngOnInit() {
  }

}
