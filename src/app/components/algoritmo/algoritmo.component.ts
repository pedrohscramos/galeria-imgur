import { Component } from '@angular/core';

@Component({
  selector: 'app-algoritmo',
  templateUrl: './algoritmo.component.html',
  styleUrls: ['./algoritmo.component.scss']
})
export class AlgoritmoComponent {

  userInput!: number;
  array: number[] = [];
  sum: number = 0;
  choice!: string;

  calculateArray() {
    if (this.userInput % 10 === 0 && this.userInput >= 100 && this.userInput <= 1000) {
      for (let i = 1; i <= 10; i++) {
        if (i % 3 === 0) {
          this.array.push(i * 0.3 * this.userInput);
        } else {
          this.array.push(i * 0.1 * this.userInput);
        }
      }
    } else {
      alert("O valor informado deve ser múltiplo de 10, e estar entre 100 e 1000.");
    }
  }

  calculateSum() {
    this.sum = 0;
    let oddPositions = this.choice === 'odd';
    for (let i = 0; i < this.array.length; i++) {
      if ((i % 2 === 0 && oddPositions === false) || (i % 2 !== 0 && oddPositions === true)) {
        this.sum += this.array[i];
      }
    }
  }

}
