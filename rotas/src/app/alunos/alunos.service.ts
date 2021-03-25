import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    { id: 1, nome: 'Aluno 01', email: 'aluno01@gmail.com' },
    { id: 2, nome: 'Aluno 02', email: 'aluno02@gmail.com' },
    { id: 3, nome: 'Aluno 03', email: 'aluno03@gmail.com' },
    { id: 4, nome: 'Aluno 04', email: 'aluno04@gmail.com' },
    { id: 5, nome: 'Aluno 05', email: 'aluno05@gmail.com' },
    { id: 6, nome: 'Aluno 06', email: 'aluno06@gmail.com' },
    { id: 7, nome: 'Aluno 07', email: 'aluno07@gmail.com' },
    { id: 8, nome: 'Aluno 08', email: 'aluno08@gmail.com' },
  ]

  constructor() {
  }

  getAlunos() {
    return this.alunos
  }

  getAlunoById(id: number) {
    let alunos = this.getAlunos();

    let aluno = alunos.filter((alun) => {
      return alun.id == id
    })

    return aluno.length > 0 ? aluno : null
  }
}
