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
  selectedMonthDays : Date[] = [];

  currentMonthDays : Date[] = [];

  constructor(
    private router : Router
  ) {    
    for (let i = 1; i <= 30; i++) {
      const dateToAdd = new Date();
      dateToAdd.setDate(i);

      this.currentMonthDays.push(dateToAdd);
    }
  }


  ngOnInit(): void {
    this.toDay = new Date();
  }

  displayMonthName(monthIndex : number){
    const date = new Date(0, monthIndex,0,0);

    const dateAsStr = (date.toLocaleDateString('fr-FR', this.options)).split(' ')[2];

    return dateAsStr[0].toUpperCase() + dateAsStr.substr(1).toLowerCase();
  }

  displayDayOfMonth(dateToDisplay : number){
    return dateToDisplay > 9 ? ''+dateToDisplay : '0'+dateToDisplay 
  }

  displayDayOfMonthName(day : Date){
    let dayStr = day.toLocaleDateString('fr-FR', this.options);

    const dayParts = dayStr.split(' ');
 
    dayStr = dayParts[0];
    dayStr = dayStr.substring(0, 3);

    return dayStr[0].toLocaleUpperCase()+dayStr.substring(1);    
  }


  async openHomePage(){
    await this.router.navigate(['home']);
  }

  async openTaskListPage(){
    await this.router.navigate(['task-list/'+1]);
  }

  async openTaskProfilPage(){
    await this.router.navigate(['profil']);
  }
  async openCalculatorPage(){
    await this.router.navigate(['calculator']);
  }
  async openDashboadPage(){
    await this.router.navigate(['dashboad']);
  }
}
