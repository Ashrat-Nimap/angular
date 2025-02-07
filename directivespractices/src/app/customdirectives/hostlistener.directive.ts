import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostlistener]',
  standalone: true
})
export class HostlistenerDirective {

  constructor(private el : ElementRef,private render : Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.render.setStyle(this.el.nativeElement,'backgroundColor','yellow');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.render.removeStyle(this.el.nativeElement,'backgroundColor')
  }

}
