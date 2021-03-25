import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos.routing.module';

import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';
import { CursosDetalhesComponent } from './cursos-detalhes/cursos-detalhes.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursosDetalhesComponent,
    CursoNaoEncontradoComponent
  ],

  imports: [
    CommonModule,
    CursosRoutingModule
  ],

  exports: [],

  providers: [CursosService],
})
export class CursosModule { }
