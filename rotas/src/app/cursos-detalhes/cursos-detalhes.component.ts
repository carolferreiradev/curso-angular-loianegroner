import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos-detalhes',
  templateUrl: './cursos-detalhes.component.html',
  styleUrls: ['./cursos-detalhes.component.css']
})
export class CursosDetalhesComponent implements OnInit {

  public id: string;
  public inscricao: Subscription;

  constructor(private route: ActivatedRoute) {
    // this.id = this.route.snapshot.params['id']
    // console.log(this.route)
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id']
    })
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
