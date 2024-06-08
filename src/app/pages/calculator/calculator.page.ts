import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MathsService } from 'src/app/services/maths/maths.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  entryOne: number = 0;
  entryTwo: number = 0;
  sign: string = '';

  result = 0;

  constructor(
    private maths: MathsService
  ) { }

  ngOnInit(): void {
    console.log('dans home');
  }

  clickBtn() {
    console.log('Hello Method');
  }

  clickNumber(selectedNumber: number) {
    let valeuFinal = '';

    if (this.sign.length > 0) {
      valeuFinal = this.entryTwo + '' + selectedNumber;
      this.entryTwo = Number.parseFloat(valeuFinal);
    } else {
      valeuFinal = this.entryOne + '' + selectedNumber;
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
          this.result = this.maths.addition(this.entryOne, this.entryTwo);          
          break;
        case '-':
          this.result = this.maths.soustraction(this.entryOne, this.entryTwo);
          break;
        case '*':
          this.result = this.entryOne * this.entryTwo;
          break;
        case '/':
          this.result = this.entryOne / this.entryTwo;
          break;
        case '%':
          this.result = this.maths.percent(this.entryOne, this.entryTwo);
          break;

        default:
          console.log('no action');

          break;
      }
    }
  }

  reset() {
    this.entryOne = 0;
    this.entryTwo = 0;
    this.sign = '';
    this.result = 0;
  }

}
