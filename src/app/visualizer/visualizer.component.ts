import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { GeneralInfo } from '../generalInfo.service'

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit {

  arrAnimation:{position1:number,position2:number}[];
  speedAnimation:number;
  data:number[] = [];
  widthContainerData:number;
  widthSingleData:number;

  constructor(
    private dataService:DataService,
    private generalInfo:GeneralInfo) {

    this.dataService.dataAmountChange.subscribe(
      (dataAmount:number) => {
        this.data = [];
        this.fillData(dataAmount);
      }
    );

    this.dataService.startAlgorithm.subscribe(
      () => {
        this.bubbleSort();
        let time = this.makeAnimation();
        //this.dataService.setDataSorted(true);
      }
    );

    this.dataService.shuffleData.subscribe(
      ()=>{
        this.shuffle(this.data);
      }
    )


  }


  ngOnInit(): void {
    this.arrAnimation =[]
    this.widthContainerData = document.getElementById('data-container').clientWidth;
    this.widthSingleData = Math.round(this.widthContainerData/this.dataService.getDataAmount());
    this.fillData(this.dataService.getDataAmount());
  }

  generateNumber(lowerBound:number,upperBound:number):number{
    return Math.floor((Math.random() * upperBound) + lowerBound);
  }
  shuffle(sortedArray:number[]){
    let aux:number[] = [...sortedArray];
    let generalIndex = 0;
    while(aux.length != 0){
      let num =  this.generateNumber(0,aux.length);

      sortedArray[generalIndex] = aux[num];
      aux.splice(num,1);

      generalIndex++;
    }
  }

  fillData(cantData:number = 20){
    let inicio = 5
    for(let i = inicio; i < cantData+inicio;i++){
      this.data.push(i+1);
    }
    this.shuffle(this.data);
  }
  //indices de 0 a N-1
  swapDivs(indx1:number,indx2:number,arr:NodeList){
    if(indx1 > indx2){
      arr[0].parentElement.insertBefore(arr[indx2],arr[indx1]);
      arr[0].parentElement.insertBefore(arr[indx1],arr[indx2]);
    }
    else{
      arr[0].parentElement.insertBefore(arr[indx1],arr[indx2]);
      arr[0].parentElement.insertBefore(arr[indx2],arr[indx1]);
    }
  }
  swapData(indx1:number,indx2:number,arr:number[]){
    let aux = arr[indx2];
    arr[indx2] = arr[indx1];
    arr[indx1] = aux;
  }

  bubbleSort(){
    let auxArr = [...this.data];
    for(let i =0; i < auxArr.length;i++){
      for(let j = i+1; j < auxArr.length;j++){
        if(auxArr[i] > auxArr[j]){
          this.arrAnimation.push({position1:i,position2:j});
          this.swapData(i,j,auxArr);
        }
      }
    }
  }
  makeAnimation(){
    let accumulator = 30
    let arrDivs:NodeList = document.getElementById('data-container').childNodes;
    let el = 0;
    while(this.arrAnimation.length!=0){
      let {position1,position2} = this.arrAnimation[0];
      setTimeout(()=>{
        document.getElementById('data-container').getElementsByClassName( 'single-data' )[position1].classList.add('swap');
        document.getElementById('data-container').getElementsByClassName( 'single-data' )[position2].classList.add('swap');
        this.swapDivs(position1,position2,arrDivs)
        this.swapData(position1,position2,this.data);
      },(el*3)*(this.dataService.getSpeedAnimation())+100);

      setTimeout(()=>{
        document.getElementById('data-container').getElementsByClassName( 'single-data' )[position1].classList.remove('swap');
        document.getElementById('data-container').getElementsByClassName( 'single-data' )[position2].classList.remove('swap');
      },(el*3)*(this.dataService.getSpeedAnimation())+350);

      if(this.arrAnimation.length===1){
        setTimeout(()=>{
          this.dataService.setDataSorted(true);
        },(el*3)*(this.dataService.getSpeedAnimation()));
      }

      this.arrAnimation.shift();
      el++;

    }

    return accumulator
  }

}
