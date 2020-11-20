import { EventEmitter } from '@angular/core';

export class DataService {
  start:boolean = false;
  dataAmount:number;
  speed:number;
  algorithm:string;
  dataSorted:boolean = false;

  maxData:number = 100;
  minData:number = 4;

  startAlgorithm = new EventEmitter();
  dataAmountChange = new EventEmitter<number>();
  speedAnimation = new EventEmitter<number>();
  dataIsSorted = new EventEmitter<boolean>();
  shuffleData = new EventEmitter();

  setDataAmount(dataAmount:number){
    if(dataAmount > this.maxData || dataAmount < this.minData){
      return
    }
    this.dataAmount = dataAmount
    console.log('New dataAmount:' + dataAmount)
    this.dataAmountChange.emit(this.dataAmount)

    this.dataSorted = false
    this.dataIsSorted.emit(false)
  }
  setSpeed(speed:number){
    this.speed = speed
    console.log('New Speed:' + speed)
  }
  setDataSorted(dataSorted:boolean){
    this.dataSorted = dataSorted
    this.dataIsSorted.emit(this.dataSorted)
    console.log('Data Sorted:' + dataSorted)
  }
  setAlgorithm(algorithm:string){
    this.algorithm = algorithm
    console.log('New Algo:' + algorithm)
  }
  setStart(value:boolean) {
    this.start = value
    this.startAlgorithm.emit()
    console.log('start sorting')
  }
  shuffle(){
    this.shuffleData.emit()
  }

  getDataAmount(){
    return this.dataAmount
  }
  getSpeedAnimation(){
    return this.speed
  }
}
