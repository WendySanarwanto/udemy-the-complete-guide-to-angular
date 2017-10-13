import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ticks: number[] = [];

  onGameTick(event) {
    this.ticks.push(event.counter);
  }

  onGameStopped() {
    this.ticks = [];
  }

  isOdd(number) {
    return number % 2 > 0;
  }

  isEven(number) {
    return number % 2 === 0;
  }
}
