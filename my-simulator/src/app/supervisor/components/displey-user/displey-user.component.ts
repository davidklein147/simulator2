import { Component, Input, OnInit } from '@angular/core';
import { User, UserRegister } from 'src/app/interfaces/intern';

@Component({
  selector: 'app-displey-user',
  templateUrl: './displey-user.component.html',
  styleUrls: ['./displey-user.component.css']
})
export class DispleyUserComponent implements OnInit {

  @Input() users: UserRegister;

  user :UserRegister;
  allUsers:boolean;

  constructor() {
    this.allUsers = false
  }

  ngOnInit(): void {
    if (this.users) {
      this.user = this.users;
      console.log(this.user);
      this.allUsers = true;
    }else{
      this.user = new UserRegister()
      this.allUsers = false;
      this.user.register.password ='1234'
    }
  }

}
