import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  public formulario: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    // Jeito mais verboso
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // })

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    })
  }

  onSubmit() {
    console.log(this.formulario)

    const dados = JSON.stringify(this.formulario.value)

    this.http.post('https://httpbin.org/post', dados)
      .subscribe((dado) => {
        console.log(dado)
        // resetar o form em caso de response 200
        this.resetar()

      },
        (error) => alert('erro'));
  }

  resetar() {
    this.formulario.reset()
  }

}
