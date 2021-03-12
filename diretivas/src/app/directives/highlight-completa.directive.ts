import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompleta]'
})
export class HighlightCompletaDirective {

  @HostListener('mouseover') onMouseOver() {
    this.bkColor = this.bgHighlight
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bkColor = this.bgDefault
  }

  @HostBinding('style.backgroundColor') bkColor: string

  @Input() bgDefault: string = 'white'
  @Input() bgHighlight: string = 'white'

  constructor() { }
  ngOnInit(): void {
    this.bgDefault
  }
}
