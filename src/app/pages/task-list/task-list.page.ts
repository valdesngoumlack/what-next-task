import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskInfo } from 'src/app/models/models-ui';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {
  options : any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  currentTaskList: TaskInfo[] = [];
  addTaskForm !: FormGroup;

  constructor() {

    this.addTaskForm = new FormGroup({
      name : new FormControl(''),
      description : new FormControl(''),
      priorityCode : new FormControl('')
    });

    this.currentTaskList.push(
      {
        id: 1,
        name: 'Corrriger des copies',
        startDate: new Date(),
        endDate: new Date(),
        priority: 'U',
        startHour: new Date(),
        endHour: new Date(),
        status : 'OP'
      },
      {
        id: 2,
        name: 'Manger',
        startDate: new Date(),
        endDate: new Date(),
        priority: 'I',
        startHour: new Date(),
        endHour: new Date(),
        status: 'IP'
      },
      {
        id: 3,
        name: 'Dormir',
        startDate: new Date(),
        endDate: new Date(),
        priority: 'N',
        startHour: new Date(),
        endHour: new Date(),
        status: 'DO'
      }
    )
  }

  ngOnInit() {
    this.displayDateHour(new Date());
  }



  saveTask(){

  }

  displayTaskPriority(priotyCode: string) {
    switch (priotyCode) {
      case 'U':
        return 'Urgente'
        break;
      case 'I':
        return 'Importante'
        break;
      case 'N':
        return 'Normale'
        break;

      default:
        return 'Inconnue'
        break;
    }
  }

  displayDayOfMonthName(day : Date){
    let dayStr = day.toLocaleDateString('fr-FR', this.options);

    const dayParts = dayStr.split(' ');
 
    dayStr = dayParts[0];
    dayStr = dayStr.substring(0, 3);

    return dayStr[0].toLocaleUpperCase()+dayStr.substring(1);    
  }

  displayDateHour(dateToGetHour : Date){    
    const hour = this.displayNumberWithTwoChars(dateToGetHour.getHours());
    const mins = this.displayNumberWithTwoChars(dateToGetHour.getMinutes());
    
    return hour+'h'+mins;
  }

  displayNumberWithTwoChars(dateToDisplay : number){
    return dateToDisplay > 9 ? ''+dateToDisplay : '0'+dateToDisplay 
  }

  getTaskPriorityColor(priotyCode : string){
    switch (priotyCode) {
      case 'U':
        return 'red'
        break;
      case 'I':
        return 'purple'
        break;
      case 'N':
        return 'gray'
        break;

      default:
        return 'black'
        break;
    }
  }

  getTaskStatusColor(taskStatusCode : string){
    switch (taskStatusCode) {
      case 'DO':
        return 'green'
        break;
      case 'IP':
        return '#FCA630'
        break;

      default:
        return 'red'
        break;
    }
  }
  
}
