import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[appMapSelect]'
})
export class MapSelectDirective implements OnChanges {
    @Input() appMapSelect: boolean;

    constructor(private el: ElementRef) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.el.nativeElement.style.fill = this.appMapSelect ? '#f5cb5c' : '#ffffff';
    }
}
