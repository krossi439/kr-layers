import { ComponentRef, Directive, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../app.reducer';
import { Subscription, take } from 'rxjs';
import { select } from '@ngrx/store';
import { getComponent } from '../register-component';
import { selectComponent, selectComponentData } from '../store/component-state.reducer';
import { closeSelf, updateComponentState } from '../store/component-state.actions';

@Directive({
  selector: '[krComponentOutlet]'
})
export class ComponentOutletDirective implements OnInit, OnDestroy {
  @Input() set krComponentOutlet(id: string) {
    this.componentId = id;
  }

  componentId!: string;
  componentRef: ComponentRef<any>;
  subscriptions = new Subscription();

  constructor(private viewContainer: ViewContainerRef, private store: Store<State>) { }

  ngOnInit() {
    this.store.pipe(select(selectComponent(this.componentId)), take(1))
      .subscribe((component) => {
        this.viewContainer.clear();
        this.componentRef = this.viewContainer.createComponent(getComponent(component.selector));

        this.subscriptions.add(this.store.pipe(select(selectComponentData(this.componentId)))
          .subscribe((data) => {
            this.componentRef.setInput('data', data);
            this.componentRef.changeDetectorRef.detectChanges();
          }));

        this.componentRef.instance.updateSelf = (componentState: any) => this.store.dispatch(updateComponentState({
          componentState: {
            id: this.componentId,
            changes: componentState
          }
        }));

        this.componentRef.instance.closeSelf = () => this.store.dispatch(closeSelf({id: this.componentId}));
      });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();

    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
