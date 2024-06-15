import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskGroup } from 'src/app/models/models-ui';
import { MathsService } from 'src/app/services/maths/maths.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  taskGroupList : TaskGroup[] = [];
  loginForm !: FormGroup;

  constructor(
    private mathUtil : MathsService,
    private router : Router
  ) {
    this.loginForm = new FormGroup({
      email : new FormControl(""),
      password: new FormControl("")
    });



    const personalTask = new TaskGroup();
    personalTask.id = 2;
    personalTask.name = 'Personnelles',
    personalTask.iconName = 'person-outline';
    personalTask.tasks = [];

    this.taskGroupList.push(
      {
        id : 1,
        name : 'Toutes',
        iconName : 'document-text-outline',
        tasks : []
      },
      personalTask,
      {
        id : 3,
        name : 'Travail',
        iconName: 'wallet-outline',
        tasks : []
      },
      {
        id : 4,
        name : 'Idées',
        iconName: 'bulb-outline',
        tasks : []
      }
    );
  }

  ngOnInit() {

  }

  onSubmit(){
    const loginFormValues = this.loginForm.value;

    const emailValue : string = loginFormValues.email;
    const passwordValue : string = loginFormValues.password;
    
    console.log('emailValue:'+emailValue);
    console.log('passwordValue:'+passwordValue);
    
  }

  async openTaskList(taskGroupId : number){
    await this.router.navigate(['task-list/'+taskGroupId]);
  }
}
