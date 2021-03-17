import { LogService } from './../services/log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
   providedIn:"root"
})

export class CursosService {

  // Com o objeto EventEmitter conseguimos emitir eventos para que nossa
  // aplicação escute esses eventos e por final conseguimos nos inscrever nesses eventos
  // notificando o codigo quando houver mudanças

  emitirCursoCriado = new EventEmitter<string>()

  // para que seja possivel emitir eventos mesmo com instancias diferentes
  // Static: sem necessidade de instanciar a classe para acessar o método
  static criouNovoCurso = new EventEmitter<string>()

  private cursos: string[] = ['Angular', 'React', 'NodeJs'];

  constructor(private logService: LogService) {
    console.log('Cursos Services')
  }

  getCursos() {
    this.logService.consoleLog('Obtendo lista de cursos.')
    return this.cursos
  }

  addCurso(curso: string) {
    this.logService.consoleLog('Criando um novo curso: '+ curso)
    this.cursos.push(curso)
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
