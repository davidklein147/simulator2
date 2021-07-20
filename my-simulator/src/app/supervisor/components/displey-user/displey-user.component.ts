import { Component, Input, OnInit } from '@angular/core';
import { User, UserRegister } from 'src/app/interfaces/intern';
import { HttpServerService } from 'src/app/servers/http-server.service';

@Component({
  selector: 'app-displey-user',
  templateUrl: './displey-user.component.html',
  styleUrls: ['./displey-user.component.css']
})
export class DispleyUserComponent implements OnInit {

  @Input() users: UserRegister;

  user :UserRegister;
  allUsers:boolean;
  isAvailable:string;
  isUse:boolean;

  constructor( private http:HttpServerService) {
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

  checkIfUser(userName: string): void {
    console.log("chack");
    if (!userName) {
      this.isAvailable = ""
      return
    }
    this.http.chackIsUse(userName).subscribe(isUse => {
      this.isUse = isUse;
      this.isAvailable = `the user name is${this.isUse?"'nt ":" "}available`;
    })
  }

}
