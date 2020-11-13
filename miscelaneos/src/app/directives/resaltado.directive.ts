import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) { }

  @Input('appResaltado') nuevoColor: string;

  @HostListener('mouseenter') mouseEntro(): any {
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalir(): any {
    this.resaltar(null);
  }

  private resaltar(color: string): any {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
