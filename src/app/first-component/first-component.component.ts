import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Matheus';
  lastName: string = 'Oliveira';
  RA: string = '0050832021009';
  today = new Date();

  constructor() {}

  ngOnInit() {}
}
