import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ABW';

  pictures: string[] = [];

  ngOnInit() {
    for(var i = 1; i <= 8; i++) {
      this.pictures.push(`background-image: url(assets/images/background/ab_${i}.jpg)`)
    }
  }
}
