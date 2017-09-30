import { Directive, ViewContainerRef, OnChanges, TemplateRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appNgLoop]'
})
export class NgLoopDirective implements OnInit {
  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>,
            ) { }

  ngOnInit(): void {
    this.container.createEmbeddedView(this.template);
  }
}

