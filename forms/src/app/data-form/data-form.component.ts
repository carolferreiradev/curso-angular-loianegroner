import { IEstados } from './../shared/models/estados';
import { DropdownService } from './../shared/services/dropdown.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  public formulario: FormGroup;

  public estados: IEstados;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropDownService: DropdownService
  ) { }

  ngOnInit() {
    this.getEstados()
    // Jeito mais verboso
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // })

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, Validators.required],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      })
    })
  }

  async getEstados(){
    (await this.dropDownService.getEstadorBr())
      .subscribe((dados => {this.estados = dados, console.log(dados)} ))
  }

  onSubmit() {
    if (this.formulario.valid) {
      const dados = JSON.stringify(this.formulario.value)

      this.http.post('https://httpbin.org/post', dados)
        .subscribe((dado) => {
          console.log(dado)
          // resetar o form em caso de response 200
          // this.resetar()

        },
          (error) => alert('erro'));
    } else {
      this.validateFormFields(this.formulario)
    }
  }

  public validateFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((controlForm) => {
      const control = formGroup.get(controlForm)

      control.markAsDirty();//modificado

      //verifica se o control é uma instancia de FormGroup
      if (control instanceof FormGroup) {
        this.validateFormFields(control) //onde repassará para os aninhamentos a própria função
      }

    })
  }

  resetar() {
    this.formulario.reset()
  }

  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
  }

  cssError(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'is-invalid': this.verificaValidTouched(campo)
    }
  }

  async consultaCEP() {

    let cep = this.formulario.get('endereco.cep').value

    //Deixando somente digitos
    cep = cep.replace(/\D/g, "");

    //Verifica se o CEP tem valor informado
    if (cep != "") {

      //Expressão regular para validar o CEP
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {

        //Consulta o webservice viacep.com.br
        await this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe((dados) => this.populaDadosEndereco(dados))

      }
    } else {
      alert('CEP informado é inválido')
    }

  }
  populaDadosEndereco(dados) {

    this.formulario.patchValue({
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

  resetaDadosEndereco() {
    this.formulario.patchValue({
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
