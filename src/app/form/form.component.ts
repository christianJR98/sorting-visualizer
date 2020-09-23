import { Component, OnInit,DoCheck, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit,DoCheck {
  @Output() startAlgorithm = new EventEmitter<MouseEvent>();
  @Output() dataAmountChange = new EventEmitter<number>();
  @Output() speedAnimation = new EventEmitter<number>();
  speed:number;
  oldSpeed:number;
  dataAmount:number;
  oldDataAmount:number;
  maxData:number;

  constructor() { }

  ngOnInit(): void {
    this.dataAmount = 20;
    this.oldDataAmount = 20;
    this.maxData=100;
    this.speed = 55;
  }
  ngDoCheck(){
    //Detects Other things than just changes on variables
    if(this.dataAmount !== this.oldDataAmount){
      if(this.dataAmount > this.maxData){
        return;
      }
      this.oldDataAmount = this.dataAmount;
      this.dataAmountChange.emit(this.dataAmount);
    }
    if(this.speed !== this.oldSpeed){
      this.oldSpeed = this.speed;
      this.speedAnimation.emit(this.speed);
    }

  }

  startSortig(mouseEvent:MouseEvent):void{
    this.startAlgorithm.emit(mouseEvent);
  }
}
