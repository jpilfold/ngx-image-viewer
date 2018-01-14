import { Directive, HostListener, OnChanges, Input, ElementRef } from '@angular/core';
import * as screenfull from 'screenfull';

@Directive({
    selector: '[nivToggleFullscreen]'
})
export class ToggleFullscreenDirective implements OnChanges {

    @Input('nivToggleFullscreen')
    isFullscreen: boolean;

    constructor(private el: ElementRef) { }

    ngOnChanges() {
        if (this.isFullscreen && screenfull.enabled) {
            screenfull.request(this.el.nativeElement);
        } else if (screenfull.enabled) {
            screenfull.exit();
        }
    }

}
