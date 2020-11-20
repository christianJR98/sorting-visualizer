import { Component,HostListener } from '@angular/core';
import { DataService } from './data.service'
import { GeneralInfo } from './generalInfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DataService, GeneralInfo]
})
export class AppComponent {

  start:boolean = false;
  dataAmount:number;
  speed:number;
  dataIsSorted:boolean = false;

  constructor(private generalInfo:GeneralInfo){}

  ngOnInit(): void {
    this.dataAmount = 20;
    this.speed = 55;
    this.generalInfo.setWidth(window.innerWidth)

    this.generalInfo.setNavbarHeight(document.getElementById('navbar').scrollHeight)

    /*
    console.log("Height",document.getElementById('navbar').scrollHeight)
    console.log("Height",document.getElementById('navbar').offsetHeight)
    console.log("Height",document.getElementById('navbar').clientHeight)
    console.log("Height",document.getElementById('navbar').getBoundingClientRect().height)
    */

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.generalInfo.setNavbarHeight(document.getElementById('navbar').scrollHeight)
    this.generalInfo.setWidth(window.innerWidth)
  }

  startAnimation(event:MouseEvent){
    if(this.dataIsSorted == false){
      this.start = true;
    }else{
      alert("Data Sorted");
    }
  }

  endAlgorithm(){
    this.dataIsSorted = true;
    this.start = false;
  }
  speedAnimation(speed:number){
    this.speed = speed;
  }
  newDataAmount(newAmount:number){
    this.dataIsSorted = false;
    this.dataAmount = newAmount;
  }

  getNavbarHeight(){
    return this.generalInfo.getNavbarHeight()
  }
}
