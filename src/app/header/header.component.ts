import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GeneralInfo } from '../generalInfo.service';
import { algorithms } from '../Algorithms/algorithmsConst'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuCollapsed:boolean;
  dataAmount:number;
  isDisabled:boolean;


  constructor(
    public dataService:DataService,
    private generalInfo:GeneralInfo
    ) {

      this.dataService.endAlgorithm.subscribe(
        () => {
          this.isDisabled = !this.isDisabled
        }
      );
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
    if(this.validateForm()){
      this.dataService.setStart(true)
      this.isDisabled = true
    }
  }

  shuffle(){
    this.dataService.shuffle()
  }

  getAlgorithms(){
    return algorithms
  }

  getScreenSize(){
    return this.generalInfo.getScreenSize()
  }

  disableForm(){
    let form = document.getElementById("data-form");
    let elements = form.getElementsByTagName('*');
    for (var i = 0, len = elements.length; i < len; ++i) {
      console.log(elements[i])

    }
  }

  validateForm(){

    if(this.dataService.getIsDataSorted()){
      alert('Data is sorted')
      return false
    }

    if(this.dataAmount < this.dataService.minData || this.dataAmount > this.dataService.maxData ){
      alert(`Invalid data amount, should be between ${this.dataService.minData} and ${this.dataService.maxData}`)
      return false
    }

    const algo = algorithms.find(algorithm=>{
      if(algorithm.value === this.dataService.getAlgorithm()){
        return algorithm
      }
    })

    if(!algo){
      alert('Select an algorithm')
      return false
    }

    return true
  }

}
