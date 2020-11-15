import { EventEmitter } from '@angular/core';

export class DataService {
  start:boolean = false;
  dataAmount:number;
  speed:number;
  dataIsSorted:boolean = false;
  maxData:number;

  startAlgorithm = new EventEmitter <MouseEvent>();
  dataAmountChange = new EventEmitter<number>();
  speedAnimation = new EventEmitter<number>();

  setDataAmount(dataAmount:number){
    this.dataAmount = dataAmount
    console.log('New data' + dataAmount)
  }
}



