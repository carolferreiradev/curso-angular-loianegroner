import { IEstados } from './../models/estados';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadorBr() {
    return this.http.get<IEstados>('assets/dados/estados-br.json')
  }
}
