import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  consultaCEP(cep: string) {

    console.log(cep)
    //Deixando somente digitos
    cep = cep.replace(/\D/g, "");

    //Verifica se o CEP tem valor informado
    if (cep != "") {

      //Expressão regular para validar o CEP
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {

        //Consulta o webservice viacep.com.br
        return this.http.get(`https://viacep.com.br/ws/${cep}/json`)

      }
    }

    return of({})

  }
}
