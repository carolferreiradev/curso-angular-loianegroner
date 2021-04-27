import { DropdownService } from './services/dropdown.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorMessageComponent,
    InputFieldComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorMessageComponent,
    InputFieldComponent
  ],
  providers: [
    DropdownService
  ]
})
export class SharedModule { }
