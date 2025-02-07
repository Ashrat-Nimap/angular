import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostdirective]',
  standalone: true
})
export class HostdirectiveDirective {

  constructor() { }
  @HostBinding('style.backgroundColor') backgroundColor!: string

  @HostListener('mouseenter') onMouseEnter(){
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = '';
  }

}
