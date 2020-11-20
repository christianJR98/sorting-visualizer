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

  constructor(private generalInfo:GeneralInfo,
    private dataService:DataService){

  }

  ngOnInit(): void {
    //this.dataService.setDataAmount(30)
    this.dataService.setSpeed(55)
    this.generalInfo.setWidth(window.innerWidth)
    this.generalInfo.setNavbarHeight(document.getElementById('navbar').offsetHeight)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.generalInfo.setNavbarHeight(document.getElementById('navbar').clientHeight)
    this.generalInfo.setWidth(window.innerWidth)
  }


  getNavbarHeight(){
    return this.generalInfo.getNavbarHeight()
  }
}
