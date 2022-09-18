import { Component, Input, OnInit } from '@angular/core';
import { registerComponent } from 'src/app/lib/register-component';

@registerComponent({
  selector: 'kr-tele-type',
  componentClass: TeleTypeComponent
})
@Component({
  selector: 'kr-tele-type',
  templateUrl: './tele-type.component.html',
  styleUrls: ['./tele-type.component.scss']
})
export class TeleTypeComponent implements OnInit {
  @Input() data: any;
  
  textSegments = [
    'And if I only could',
    'I\'d make a deal with God',
    'And I\'d get him to swap our places',
    '',
    'Be running up that road',
    'Be running up that hill',
    'Be running up that building'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
