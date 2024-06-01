import { Component, OnInit } from '@angular/core';
import { TaskGroup } from 'src/app/models/models-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  taskGroupList : TaskGroup[] = [];

  constructor() {
    const personalTask = new TaskGroup();
    personalTask.id = 2;
    personalTask.name = 'Personnelles',
    personalTask.iconName = '';
    personalTask.tasks = [];

    this.taskGroupList.push(
      {
        id : 1,
        name : 'Toutes',
        iconName : '',
        tasks : []
      },
      personalTask,
      {
        id : 3,
        name : 'Travail',
        iconName: '',
        tasks : []
      },
      {
        id : 4,
        name : 'Idées',
        iconName: '',
        tasks : []
      }
    );
  }

  ngOnInit() {

  }

}
