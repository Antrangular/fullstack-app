import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutoHide]'
})
export class AutoHideDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.el.nativeElement.style.display = 'none';
    }, 5000);
  }
}
