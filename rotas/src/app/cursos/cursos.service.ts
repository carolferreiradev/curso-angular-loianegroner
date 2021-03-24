import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      { id: 1, nome: 'Angular' },
      { id: 2, nome: 'Typescript' }
    ]
  }

  getCurso(id: number) {
    let cursos = this.getCursos();
    let curso = cursos.filter((dado) => {
      return dado.id == id
    })
    if (curso.length > 0){
      return curso
    }else{
      return null
    }
  }
}
