import { Component, Input, OnInit } from '@angular/core';

interface ImageData {
  src: string;
  imgStyle: Record<string, string>
}

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
