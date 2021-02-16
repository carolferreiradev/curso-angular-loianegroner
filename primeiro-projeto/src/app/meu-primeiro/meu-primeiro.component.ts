import { Component } from '@angular/core';
@Component({//Temos que definir que é um componente do angular, para isso usamos um decorator
  selector: 'meu-primeiro-component',
  template: `
  <p> Meu primeiro component com Angular 8! </p>
  `
})
export class MeuPrimeiroComponent {}
