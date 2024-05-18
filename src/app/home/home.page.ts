import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  entryOne: number = 0;
  entryTwo: number = 0;
  sign: string = '';

  result = 0;

  constructor() { }

  clickBtn() {
    console.log('Hello Method');
  }

  clickNumber(selectedNumber: number) {
    let valeuFinal = '';

    if (this.sign.length > 0) {
      valeuFinal = this.entryTwo +''+selectedNumber;
      this.entryTwo = Number.parseFloat(valeuFinal);
    } else {
      valeuFinal = this.entryOne +''+selectedNumber;
      this.entryOne = Number.parseFloat(valeuFinal);
    }
  }

  clickSign(selectedSign: string) {
    this.sign = selectedSign;
  }

  apply() {
    if (this.sign.length > 0) {

      switch (this.sign) {
        case '+':
          this.result = this.entryOne + this.entryTwo;
          break;
        case '-':
          this.result = this.entryOne - this.entryTwo;
          break;
        case '*':
          this.result = this.entryOne * this.entryTwo;
          break;
        case '/':
          this.result = this.entryOne / this.entryTwo;
          break;

        default:
          console.log('no action');

          break;
      }
    }
  }

  reset(){
    this.entryOne = 0;
    this.entryTwo = 0;
    this.sign = '';
    this.result = 0;
  }

}
