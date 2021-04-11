import { FormValidations } from './../form-validation';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  // @Input() mostrarErro: boolean
  // @Input() msgErro: string
  @Input() label: string
  @Input() control: FormControl

  constructor() { }

  ngOnInit() {

  }

  get errorMessage() {
    // interar todos os erros(aparecendo o primeiro, sendo um por vez)

    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        //TODO
        return FormValidations.getErrorMsg(this.label, propertyName, this.control.errors[propertyName])
      }
    }
    return null
  }

}
