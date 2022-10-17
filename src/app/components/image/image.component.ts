import { Component, Input, OnInit } from '@angular/core';
import { registerComponent } from 'src/app/lib/register-component';

interface ImageData {
  src: string;
  imgStyle: Record<string, string>,
  containerStyle: Record<string, string>
}

@registerComponent({
  selector: 'kr-image',
  componentClass: ImageComponent
})
@Component({
  selector: 'kr-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() data: ImageData;

  get imageData() {
    return this.data && this.data.src;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
