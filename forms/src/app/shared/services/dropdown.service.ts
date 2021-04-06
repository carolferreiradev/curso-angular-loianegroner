import { IEstados } from './../models/estados';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadorBr(): Observable<IEstados[]> {
    return this.http.get<IEstados[]>('assets/dados/estados-br.json')
  }
  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Desenvolvedor(a) Junior' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Desenvolvedor(a) Pleno' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Desenvolvedor(a) Senior' },
    ]
  }
}
