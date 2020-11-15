import { EventEmitter } from '@angular/core';

export class GeneralInfo {
  width: number;

  setWidth(newData:number) {
    this.width = newData
    console.log(newData)
  }
}

