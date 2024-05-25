import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  options : any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };


  toDay = new Date();

  monthDaysIsDisplayed = false;

  selectedMonthIndex = 1;
  selectedMonthDays : Date[] = [];

 

  constructor(
    private router : Router
  ) {

  }


  ngOnInit(): void {
    this.toDay = new Date();
  }

  selectMonth(monthIndex : number){    
    this.selectedMonthIndex = monthIndex;
  }

  showDaysOfTheMonth(){
    if (!this.monthDaysIsDisplayed) {
      this.selectedMonthDays = [];
      const numberDayOfMonth = new Date(this.toDay.getFullYear(), this.selectedMonthIndex, 0).getDate();
      
      for (let aDayIndex = 1; aDayIndex < numberDayOfMonth; aDayIndex++) {
        this.selectedMonthDays.push(
          new Date(this.toDay.getFullYear(), this.selectedMonthIndex, aDayIndex)
        );
      }
    }


    this.monthDaysIsDisplayed = !this.monthDaysIsDisplayed;
  }

  getMonthName(monthIndex : number){
    const date = new Date(0, monthIndex,0,0);

    const dateAsStr = (date.toLocaleDateString('fr-FR', this.options)).split(' ')[2];

    return dateAsStr[0].toUpperCase() + dateAsStr.substr(1).toLowerCase();
  }


  async openHomePage(){
    await this.router.navigate(['home']);
  }

  async openTaskListPage(){
    await this.router.navigate(['task-list/'+1]);
  }

  async openCalculatorPage(){
    await this.router.navigate(['calculator']);
  }
}
