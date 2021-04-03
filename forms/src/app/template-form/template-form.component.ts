import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface Usuario {
  nome: string,
  email: string
}
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {


  public usuario: Usuario = {
    nome: null,
    email: "teste@teste.com"
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched
  }

  cssError(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'is-invalid': this.verificaValidTouched(campo)
    }
  }

  onSubmit(formulario: NgForm) {

    const dados = JSON.stringify(formulario.value)

    this.http.post('https://httpbin.org/post', dados)
      .subscribe((dado) => console.log(dado));
  }

  async consultaCEP(cep: string, formulario) {

    //Deixando somente digitos
    cep = cep.replace(/\D/g, "");

    //Verifica se o CEP tem valor informado
    if (cep != "") {

      //Expressão regular para validar o CEP
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {

        //Consulta o webservice viacep.com.br
        await this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe((dados) => this.populaDadosEndereco(dados, formulario))

      }
    } else {
      alert('CEP informado é inválido')
    }

  }

  populaDadosEndereco(dados, formulario: NgForm) {
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    //   endereco: {
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: dados.complemento,
    //     rua: dados.logradouro,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // })

    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })

  }

  resetaDadosEndereco(formulario) {
    formulario.form.patchValue({
      endereco: {
        cep: null,
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }

}
