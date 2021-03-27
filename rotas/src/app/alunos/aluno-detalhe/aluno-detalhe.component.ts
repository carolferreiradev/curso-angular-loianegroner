import { Aluno } from './../aluno';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  public incricao: Subscription;
  public aluno: Aluno;
  public id: number;

  constructor(
    private router: Router,
    private routeActive: ActivatedRoute,
    private alunoService: AlunosService
  ) { }

  ngOnInit() {
    this.getAlunoById()
  }

  getAlunoById() {
    // this.incricao = this.routeActive.params.subscribe((param) => {
    //   this.id = param['id']
    // })
    // const getAluno = this.alunoService.getAlunoById(this.id);
    // this.aluno = getAluno[0];

    this.incricao = this.routeActive.data.subscribe(
      (info) => {
        this.aluno = info.aluno[0]
      }
    )
  }

  editarCadastro() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy(): void {
    this.incricao.unsubscribe()
  }

}
