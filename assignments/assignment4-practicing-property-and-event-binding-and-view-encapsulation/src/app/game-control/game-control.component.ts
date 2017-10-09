import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  isStarted: boolean;
  timerHandle: any;
  counter = 0;
  @Output() onGameTick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onStartTheGame() {
    this.timerHandle = setInterval(() => {
      this.counter++;
      this.onGameTick.emit({counter: this.counter});
      console.log(`[DEBUG] - in 'GameControlComponent', 'onStartTheGame', 'this.counter' = ${this.counter}`);
    }, 1000);
    this.isStarted = true;
  }

  onStopTheGame() {
    clearInterval(this.timerHandle);
    this.counter = 0;
    this.isStarted = false;
  }
}
