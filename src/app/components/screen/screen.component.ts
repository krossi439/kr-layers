import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { registerComponent } from 'src/app/lib/register-component';
import { featureNavigation } from '../store/feature.actions';

interface ScreenData {
  containerStyle?: {[key: string]: string};
  textStyle?: {[key: string]: string};
  messages?: string[];
  navItems?: string[];
  selectedNav?: string;
}

@registerComponent({
  selector: 'kr-screen',
  componentClass: ScreenComponent
})
@Component({
  selector: 'kr-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  @Input() data: ScreenData;

  constructor(private store: Store) { }

  ngOnInit(): void { }

  navClicked(target: string) {
    this.store.dispatch(featureNavigation({ target }));
  }
}
