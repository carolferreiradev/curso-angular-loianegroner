import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightComMouse]'
})
export class HighlightComMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color', 'yellow'
    // )
    this.bkColor = 'yellow'

  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color', 'white'
    // )
    this.bkColor = 'white'
  }

  @HostBinding('style.backgroundColor') bkColor: string;

  constructor(
    // private elementRef: ElementRef,
    // private renderer: Renderer2
  ) { }

  // É possível utilizar, com o typescript, os metodos get e set

  // @HostBinding('style.backgroundColor') get setColor(){
  // codigo extra
  // return this.bkColor;
  // }

  // private bkColor: string;


}
