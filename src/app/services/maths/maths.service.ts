import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathsService {

  constructor() { }


  public addition(numberOne : number, numberTwo : number) {
    return numberOne + numberTwo;
  }

  public soustraction(numberOne : number, numberTwo : number){
    return numberOne - numberTwo;
  }

  public percent(nombre : number, rate : number) {

    //15000/100=150
    //2%15000 = 150*2=300

    const valueOfPercent = nombre / 100;

    return valueOfPercent*rate;
  }

}
