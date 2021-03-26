import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosDetalhesComponent } from './cursos-detalhes/cursos-detalhes.component';
import { CursosComponent } from './cursos.component';

const cursosRoutes: Routes = [
  {
    path: '',
    component: CursosComponent
  },
  {
    path: ':id',
    component: CursosDetalhesComponent
  },
  {
    path: 'nao-encontrado',
    component: CursoNaoEncontradoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
