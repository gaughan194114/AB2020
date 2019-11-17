import { Component, OnInit, ViewChild, Input } from '@angular/core';
// import { interval } from 'rxjs';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() set setPictureNumber(int: number) {
    this.pictureSrc = `assets/images/background/ab_${int}.jpg`;
    this.intervalTime += (this.getRandomNumber(5) + 5 * 500);
  }
  public pictureSrc = "assets/images/background/ab_1.jpg";
  public intervalTime = 15000;
  public pictureCycle;

  constructor() { }

  ngOnInit() {
    this.createImageCycle();
  }

  getRandomNumber(int: number): number {
    return Math.floor(Math.random() * int) + 1
  }

  changeImage() {
    this.pictureSrc = `assets/images/background/ab_${this.getRandomNumber(24)}.jpg`;
    clearInterval(this.pictureCycle)
    this.createImageCycle();
  }

  createImageCycle() {
    this.pictureCycle = setInterval(() => {
      this.changeImage
    }, this.intervalTime);

  }
}
