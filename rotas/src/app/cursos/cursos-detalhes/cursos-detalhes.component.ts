import { CursosService } from '../cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos-detalhes',
  templateUrl: './cursos-detalhes.component.html',
  styleUrls: ['./cursos-detalhes.component.css']
})
export class CursosDetalhesComponent implements OnInit {

  public id: number;
  public nome: string;
  public inscricao: Subscription;
  public curso: any[];

  constructor(private route: ActivatedRoute,
    private cursoService: CursosService,
    private router: Router) {
    // this.id = this.route.snapshot.params['id']
    // console.log(this.route)
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id']
    })
    this.curso = this.cursoService.getCurso(this.id);
    if (this.curso == null) {
      this.router.navigate(['/nao-encontrado'])
    } else {
      this.nome = this.curso[0].nome
    }
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
