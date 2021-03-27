import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlunosCanDeactivateGuard } from './../guards/alunos-deactivate.guard';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';

const alunosRoutes = [
  {
    path: '', component: AlunosComponent, children: [
      {
        path: 'novo', component: AlunoFormComponent
      },
      {
        path: ':id', component: AlunoDetalheComponent
      },
      {
        path: ':id/editar',
        component: AlunoFormComponent,
        canDeactivate: [AlunosCanDeactivateGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})

export class AlunosRoutingModule { }
