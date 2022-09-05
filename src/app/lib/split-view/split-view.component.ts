import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { registerComponent } from '../register-component';

interface SplitViewData {
  components: string[];
  orientation: 'horizontal' | 'vertical';
  unit: 'pixel' | 'percent';
  sizes: (number | '*')[];
  disabled: boolean;
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

  dragging = false;
  data: Observable<SplitViewData>;

  constructor() { }

  ngOnInit(): void {
    
  }
}
