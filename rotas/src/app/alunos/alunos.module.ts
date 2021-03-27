import { AlunoDetalheResolver } from './../guards/aluno-detalhe.resolver';
import { AlunosCanDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos.routing.module';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule,
  ],
  providers: [
    AlunosService,
    AlunosCanDeactivateGuard,
    AlunoDetalheResolver
  ]
})
export class AlunosModule { }
