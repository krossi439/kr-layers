import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { registerComponent } from 'src/app/lib/register-component';

interface TeleTypeData {
  messages: string[];
  containerStyle: Record<string, string>,
  textStyle: Record<string, string>,
}

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

  constructor() { }

  ngOnInit(): void {
  }

}
