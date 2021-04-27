import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true
}

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class InputFieldComponent implements ControlValueAccessor {

  @Input() classeCss;
  @Input() id: string;
  @Input() label: string;
  @Input() type = "text";
  @Input() control;
  @Input() isReadOnly = false;

  private innerValue: any;

  get value() {
    return this.innerValue;
  }
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v)
    }
  }

  onChangeCallback: (_: any) => void = () => { };
  onTouchedCallback: (_: any) => void = () => { };

  // setar o valor
  writeValue(v: any): void {
    this.value = v

  }
  // quando o valor mudar
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn

  }
  // quando ganha o foco
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn

  }
  // quando o campo precisa desabilitar
  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled

  }

}
