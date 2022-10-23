import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-component',
  templateUrl: './timer-component.component.html',
  styleUrls: ['./timer-component.component.css'],
})
export class TimerComponentComponent implements OnInit {
  counter = 0;

  constructor() {}

  ngOnInit() {}

  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 1000);

  getMinutos() {
    return Math.trunc(this.counter / 60);
  }
  getSegundos() {
    return Math.trunc(this.counter % 60);
  }
}
