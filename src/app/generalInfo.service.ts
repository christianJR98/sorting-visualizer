import { EventEmitter } from '@angular/core';

export class GeneralInfo {
  width: number;
  height: number;

  heightNavbar: number;

  setWidth(newData:number) {
    this.width = newData
    console.log(newData)
  }

  setHeight(newData:number) {
    this.height = newData
  }

  setNavbarHeight(newData:number){
    this.heightNavbar = newData;
  }

  getNavbarHeight(){
    return this.heightNavbar;
  }

  getScreenSize(){
    if(this.width > 992){
      return "LARGE"
    }
    else {
      return "SMALL"
    }
  }
}

