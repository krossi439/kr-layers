import { ComponentRef, Directive, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../app.reducer';
import { take } from 'rxjs';
import { select } from '@ngrx/store';
import { getComponent } from '../register-component';
import { selectComponent, selectComponentData } from '../store/component-state.reducer';

@Directive({
  selector: '[krComponentOutlet]'
})
export class ComponentOutletDirective implements OnInit, OnDestroy {
  @Input() set krComponentOutlet(id: string) {
    this.componentId = id;
  }

  componentId!: string;
  componentRef: ComponentRef<any>;

  constructor(private viewContainer: ViewContainerRef, private store: Store<State>) { }

  ngOnInit() {
    this.store.pipe(select(selectComponent(this.componentId)), take(1))
      .subscribe((component) => {
        this.viewContainer.clear();
        this.componentRef = this.viewContainer.createComponent(getComponent(component.selector));
        this.componentRef.instance.data = this.store.pipe(select(selectComponentData(this.componentId)));
      });
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
