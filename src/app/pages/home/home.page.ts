import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    private mathUtil : MathsService
  ) {
    this.loginForm = new FormGroup({
      email : new FormControl(""),
      password: new FormControl("")
    });



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

  onSubmit(){
    const loginFormValues = this.loginForm.value;

    const emailValue : string = loginFormValues.email;
    const passwordValue : string = loginFormValues.password;
    
    console.log('emailValue:'+emailValue);
    console.log('passwordValue:'+passwordValue);
    
  }

}
