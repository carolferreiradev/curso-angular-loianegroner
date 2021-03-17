import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CursosComponent } from './cursos/cursos.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component';

import { LogService } from './services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LogService],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
