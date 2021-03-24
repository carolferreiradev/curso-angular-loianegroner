import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public cursos: any[];
  public pagina: number;
  public inscricao: Subscription;

  constructor(
    private cursosService: CursosService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos()

    this.inscricao = this.activeRoute.queryParams.subscribe((params) => {
      this.pagina = params['pagina'];
    })
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  proximaPagina(){
    this.router.navigate(['/cursos'], {queryParams: {'pagina':++this.pagina}})
  }

}
