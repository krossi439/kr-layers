import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { registerComponent } from '../register-component';
import { upsertComponentStates } from '../store/component-state.actions';

export interface ActionButtonData {
  label: string;
  action: string;
  props: any;
  containerStyle: Record<string, string>;
  buttonStyle: Record<string, string>;
  tooltip: string;
}

@registerComponent({
  selector: 'kr-action-button',
  componentClass: ActionButtonComponent
})
@Component({
  selector: 'kr-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {
  @Input() data: ActionButtonData;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  dispatch() {
    console.log(this.data.props);
    this.store.dispatch(upsertComponentStates({componentStates: this.data.props}));
  }

}
