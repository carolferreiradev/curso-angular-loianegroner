import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched
  }

  cssError(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  onSubmit(formulario: NgForm) {
    console.log(formulario)
    console.log(this.usuario)
  }

}
