import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { registerComponent } from 'src/app/lib/register-component';

@registerComponent({
  selector: 'kr-code-pen',
  componentClass: CodePenComponent
})
@Component({
  selector: 'kr-code-pen',
  templateUrl: './code-pen.component.html',
  styleUrls: ['./code-pen.component.scss']
})
export class CodePenComponent implements OnInit {
  @Input() data: Observable<string>

  constructor() { }

  ngOnInit(): void {
  }

}
