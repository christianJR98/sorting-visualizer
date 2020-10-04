import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sorting-visualizer';

  start:boolean = false;
  dataAmount:number;
  speed:number;
  dataIsSorted:boolean = false;


  ngOnInit(): void {
    this.dataAmount = 20;
    this.speed = 55;
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
}
