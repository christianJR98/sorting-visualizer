import { Component, OnInit,OnChanges,DoCheck,Input,SimpleChanges,Output,EventEmitter  } from '@angular/core';
@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit,OnChanges,DoCheck {
  @Input() dataAmount:number;
  @Input() speedAnimation:number;
  lastDataAmount:number;
  @Input() startAlgorithm:boolean;
  @Output() endAlgorithm = new EventEmitter();
  data:number[] = [];
  arrAnimation:{position1:number,position2:number}[];
  widthContainerData:number;
  widthSingleData:number;


  constructor() { }

  ngOnInit(): void {
    this.lastDataAmount = this.dataAmount;
    this.arrAnimation =[]
    this.widthContainerData = document.getElementById('data-container').clientWidth;
    this.widthSingleData = Math.round(this.widthContainerData/this.dataAmount);
    this.fillData();
  }
  ngOnChanges(changes: SimpleChanges){
    if (this.startAlgorithm === true) {
      this.bubbleSort();
      this.makeAnimation();
      this.endAlgorithm.emit();
    }
  }

  ngDoCheck(){
    console.log("var change");
    if(this.dataAmount !== this.lastDataAmount && this.dataAmount !== null){

      this.widthContainerData = document.getElementById('data-container').clientWidth;
      this.widthSingleData = Math.round(this.widthContainerData/this.dataAmount);

      this.data = [];
      this.fillData(this.dataAmount);
      this.lastDataAmount = this.dataAmount;
    }
  }
  generateNumber(lowerBound:number,upperBound:number):number{
    return Math.floor((Math.random() * upperBound) + lowerBound);
  }
  suffle(sortedArray:number[]){
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
    this.suffle(this.data);
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
    let arrDivs:NodeList = document.getElementById('data-container').childNodes;
    let el = 0;
    while(this.arrAnimation.length!=0){
      let {position1,position2} = this.arrAnimation[0];
      setTimeout(()=>{
        document.getElementById('data-container').getElementsByClassName( 'single-data' )[position1].classList.add('swap');
        document.getElementById('data-container').getElementsByClassName( 'single-data' )[position2].classList.add('swap');
        this.swapDivs(position1,position2,arrDivs)
        this.swapData(position1,position2,this.data);
      },(el*3)*(this.speedAnimation)+100);

      setTimeout(()=>{
        document.getElementById('data-container').getElementsByClassName( 'single-data' )[position1].classList.remove('swap');
        document.getElementById('data-container').getElementsByClassName( 'single-data' )[position2].classList.remove('swap');
      },(el*3)*(this.speedAnimation)+350);

      this.arrAnimation.shift();
      el++;
    }

  }

}
