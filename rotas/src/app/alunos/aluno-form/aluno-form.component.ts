import { IFormCandActivate } from './../../guards/iform-candeactivate';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCandActivate {
  aluno: any = {};
  inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        const aluno = this.alunosService.getAlunoById(id);
        this.aluno = aluno[0]
        if (this.aluno === null) {
          this.aluno = {};
        }
      }
    );
  }

  onInput() {
    this.formMudou = true;
  }

  podeMudarRota(){
    if(this.formMudou){
      confirm('Tem certeza que deseja sair dessa página?')
    }
    return true
  }

  podeDesativar(){
    return this.podeMudarRota()
  }

}
