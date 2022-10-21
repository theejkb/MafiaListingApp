import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[mobBorderCard]'
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    this.setBorder('#00000015', 1);
  }

  @Input('mobBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#00000050', 1.02);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#00000015', 1);
  }

  private setBorder(color: string, offset: number){
    let border = '0px 0px 20px 3px' + color;
    let scale = 'scale(' + offset + ')';
    this.el.nativeElement.style.boxShadow = border;
    this.el.nativeElement.style.cursor = 'pointer';
    this.el.nativeElement.style.transform = scale;
  }
}
