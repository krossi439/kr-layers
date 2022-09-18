import { Component, Input, OnInit } from '@angular/core';
import { registerComponent } from '../register-component';

export interface SplitViewData {
  components: string[];
  orientation: 'horizontal' | 'vertical';
  unit: 'pixel' | 'percent';
  sizes: (number | null)[];
  gutterStyle?: Record<string, string | number>,
  disabled?: boolean;
  editing?: boolean;
}

@registerComponent({
  selector: 'kr-split-view',
  componentClass: SplitViewComponent
})
@Component({
  selector: 'kr-split-view',
  templateUrl: './split-view.component.html',
  styleUrls: ['./split-view.component.scss']
})
export class SplitViewComponent implements OnInit {
  @Input() data: SplitViewData = {
    components: [],
    orientation: 'horizontal',
    unit: 'pixel',
    sizes: []
  };

  dragging = false;
  updateSelf: (newState: Partial<SplitViewData>) => void;
  closeSelf: () => void;

  constructor() { }

  ngOnInit(): void {
    
  }
}
