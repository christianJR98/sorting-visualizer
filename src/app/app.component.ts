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
  ngOnInit(): void {
    this.dataAmount = 20;
  }
  startAnimation(event:MouseEvent){
    this.start = true;
  }

  endAlgorithm(){
    this.start= false;
  }
  speedAnimation(speed:number){speed
    this.speed = speed;
  }
  newDataAmount(newAmount:number){
    this.dataAmount = newAmount;
  }
}
