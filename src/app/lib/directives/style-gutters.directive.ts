import { Directive, ElementRef, Input, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { SplitComponent } from 'angular-split';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[krStyleGutters]'
})
export class StyleGuttersDirective {
  @Input() set krStyleGutters(style: {[k: string]: any} | undefined) {
    this.style = style ? style : {};
  }

  style: {[k: string]: any} = {};

  private gutterEls: QueryList<ElementRef>;
  private subscriptions = new Subscription();

  constructor(private splitEl: SplitComponent, private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (this.splitEl && (this.splitEl as any).gutterEls) {
      this.gutterEls = (this.splitEl as any).gutterEls;
      this.setGutterStyle();
      this.subscriptions.add(this.gutterEls.changes.subscribe(() => this.setGutterStyle()));
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const { previousValue, currentValue } = changes['krStyleGutters'];

    if (currentValue && currentValue != previousValue) {
      this.setGutterStyle();
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  setGutterStyle() {
    if (this.gutterEls && this.style) {
      this.gutterEls.forEach((gutter) => {
        Object.keys(this.style).forEach((key) => this.renderer.setStyle(gutter.nativeElement, key, this.style[key]))
      });
    }
  }
}