import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';

  valor = 8

  deletarCiclo = false

  mudarValor() {
    this.valor++
  }
  destruirCiclo() {
    this.deletarCiclo = true
  }
}
