import { AfterViewInit, Directive, ElementRef, Input, OnChanges, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { SplitComponent } from 'angular-split';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[krDisableGutters]'
})
export class DisableGuttersDirective implements AfterViewInit, OnChanges {
  @Input() set krDisableGutters(disabled: boolean | undefined) {
    this.disabled = !!disabled;
  }

  disabled = false;

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
    const { previousValue, currentValue } = changes['krDisableGutters'];

    if (currentValue != previousValue) {
      this.setGutterStyle();
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  setGutterStyle() {
    if (this.gutterEls) {
      this.gutterEls.forEach((gutter) => this.renderer.setStyle(gutter.nativeElement, 'visibility', this.disabled ? 'hidden': 'visible'));
    }
  }
}
