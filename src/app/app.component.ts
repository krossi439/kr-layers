import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { homePage } from './app-layouts';
import { State } from './app.reducer';
import { loadComponentStates } from './lib/store/component-state.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  components!: Observable<String[]>

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(loadComponentStates({
      componentStates: homePage
    }));
  }
}
