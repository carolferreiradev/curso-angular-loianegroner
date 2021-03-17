import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {
  cursos: string[] = [];

  // cursosService: CursosService;

  constructor(private cursosService: CursosService) {
    // this.cursosService = new CursosService();
    // this.cursosService = _cursosService;
   }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    // inicialização do evento do service
    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    )
  }

}
