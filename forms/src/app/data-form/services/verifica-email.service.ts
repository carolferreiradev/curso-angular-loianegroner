import { delay, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  constructor(private http: HttpClient) { }

  verificaEmail(email: string) {
    return this.http.get('assets/dados/verificar-email.json')
      .pipe(
        delay(2000),
        map((dados: { emails: any[] }) => dados.emails),
        tap(console.log),
        map((dados: { email: string }[]) => dados.filter(valor => valor.email === email)),
        // tap(console.log),
        map((dados: any[])=> dados.length > 0),
        // tap(console.log),
      )
  }
}
