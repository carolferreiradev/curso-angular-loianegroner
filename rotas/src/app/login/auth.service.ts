import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  public mostrarMenuEmitter = new EventEmitter<boolean>()

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome == 'usuario@email.com' && usuario.senha === '123') {
      this.usuarioAutenticado = true;

      this.router.navigate(['/']);

      this.mostrarMenuEmitter.emit(true);
    } else {
      this.usuarioAutenticado = false
      this.mostrarMenuEmitter.emit(false);
    }
  }
  usuarioEstaAutenticado() {
    return this.usuarioAutenticado
  }

}
