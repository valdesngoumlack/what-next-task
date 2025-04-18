import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.page.html',
  styleUrls: ['./dashboad.page.scss'],
})
export class DashboadPage implements OnInit {

  userFormGroup = new FormGroup({
    name : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required]),
    img : new FormControl('', [Validators.required])
  })

  displayUserForm = false;
  selectedUser !: User;

  users : User[] = [
    {
      id: 1,
      name: "Alice Dupont",
      email: "alice.dupont@example.com",
      img: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      name: "Bruno Lefevre",
      email: "bruno.lefevre@example.com",
      img: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "Chloé Martin",
      email: "chloe.martin@example.com",
      img: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      id: 4,
      name: "David Morel",
      email: "david.morel@example.com",
      img: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      id: 5,
      name: "Emma Bernard",
      email: "emma.bernard@example.com",
      img: "https://randomuser.me/api/portraits/women/5.jpg"
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.userFormGroup.valid){
      this.selectedUser.name = this.userFormGroup.value.name ?? '';
      this.selectedUser.email = this.userFormGroup.value.email ?? '';
      this.selectedUser.img = this.userFormGroup.value.img ?? '';

      const userIndex = this.users.findIndex(user => user.id === this.selectedUser.id);

      if(userIndex !== -1){
        this.users[userIndex] = this.selectedUser;
      }else{
        this.users.push(this.selectedUser);
      }

      this.displayUserForm = false;
    }
  }

  openUserForm(open : boolean, user : User | null){
    this.displayUserForm = open;

    if(user){
      this.selectedUser = user;
    }else{
      this.selectedUser = new User();
      this.selectedUser.id = this.users.length + 1;
    }
    this.userFormGroup.patchValue({
      name : this.selectedUser.name,
      email : this.selectedUser.email,
      img : this.selectedUser.img
    });


  }
}


class User {
  id !: number;
  name !: string;
  email !: string;
  img !: string;
}
