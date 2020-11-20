import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GeneralInfo } from '../generalInfo.service';
import { algorithms } from '../algorithmsConst'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuCollapsed:boolean;
  dataAmount:number;


  constructor(
    private dataService:DataService,
    private generalInfo:GeneralInfo
    ) {

  }

  ngOnInit(): void {
    this.isMenuCollapsed = true
    this.dataAmount = this.dataService.getDataAmount()
  }

  algorithmChange(event): void{
    this.dataService.setAlgorithm(event.target.value)
  }

  dataAmountChange(): void {
    this.dataService.setDataAmount(this.dataAmount)
  }

  speedChange(event): void {
    this.dataService.setSpeed(event.target.value)
  }
  startSortig(): void{
    this.dataService.setStart(true)
  }

  getAlgorithms(){
    return algorithms
  }

  getScreenSize(){
    console.log(this.generalInfo.getScreenSize())
    return this.generalInfo.getScreenSize()
  }

  validateForm(){
    if(this.dataAmount ){

    }
    //validar el algoritmo
  }

}
