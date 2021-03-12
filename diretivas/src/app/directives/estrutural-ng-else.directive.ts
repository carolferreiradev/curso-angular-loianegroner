import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class EstruturalNgElseDirective {

  @Input() set ngElse(condition: boolean) {
    if (!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear()
    }
  }

  constructor(private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>) { }

}
