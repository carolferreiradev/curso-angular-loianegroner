import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef,
    private _renderer: Renderer2) {

      //console.log(this._elementRef)

      // Não é recomendado acessar diretamente o elemento, pois pode causar vunerabilidade.
      // this._elementRef.nativeElement.style.backgroundColor = 'yellow';

      this._renderer.setStyle(
        this._elementRef.nativeElement,//referencia do elemento
        'background-color',//nome do estilo(da mesma forma que passamos como atributo na tag, ao inves de backgroundColor)
        'yellow')//valor
  }

}
