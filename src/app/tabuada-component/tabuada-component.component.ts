import br from '@angular/common/locales/br';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabuada-component',
  templateUrl: './tabuada-component.component.html',
  styleUrls: ['./tabuada-component.component.css'],
})
export class TabuadaComponentComponent implements OnInit {
  @Input() num: Number = 0;
  show: boolean = false;

  counter = 0;
  constructor() {}

  ngOnInit() {}

  Tabuada() {
    var tabuada = '';
    var value = this.num;
    for (var count = 1; count <= 10; count++) {
      tabuada +=
        this.num + ' X ' + count + ' = ' + Number(this.num) * count + `\n`;
    }
    return tabuada;
  }
}
