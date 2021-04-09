import { FormArray } from "@angular/forms";

export class FormValidations {

  static requiredMinCheckBox(min = 1) {
    const validator = (formArray: FormArray) => {
      // const values = formArray.controls;
      // let totalChecked = 0;
      // for (let i = 0; i < values.length; i++) {
      //   if (values[i].value) {
      //     totalChecked += 1;
      //   }

      // }
      const totalChecked = formArray.controls
        .map(valor => valor.value)
        .reduce((total, valorAtual) => valorAtual ? total + valorAtual : total, 0);

      return totalChecked >= min ? null : { required: true }
    };

    return validator
  }
}
