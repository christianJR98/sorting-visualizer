
export class GeneralInfo {
  width: number;
  height: number;

  heightNavbar: number;

  setWidth(newData:number) {
    this.width = newData
  }

  setHeight(newData:number) {
    this.height = newData
  }

  setNavbarHeight(newData:number){
    if(newData > 120){
      this.heightNavbar = 64
    }
    else {
      this.heightNavbar = newData;
    }
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

