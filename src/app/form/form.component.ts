import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() startAlgorithm = new EventEmitter<MouseEvent>();
  @Output() dataAmountChange = new EventEmitter<number>();
  @Output() speedAnimation = new EventEmitter<number>();

  @Input() dataAmount:number;
  @Input() speed:number;
  maxData:number;

  constructor() { }

  ngOnInit(): void {
    this.maxData = 100;
  }

  // When data changes this function runs
  dataAmountFunc(): void{
    this.dataAmountChange.emit(this.dataAmount);
  }

  // When speed changes this function runs
  speedChange(): void{
    this.speedAnimation.emit(this.speed);
  }

  startSortig(mouseEvent:MouseEvent):void{
    this.startAlgorithm.emit(mouseEvent);
  }
}
