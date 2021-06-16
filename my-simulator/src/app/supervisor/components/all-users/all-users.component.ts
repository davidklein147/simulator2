import { Component, OnInit } from '@angular/core';
import { User, UserRegister } from 'src/app/interfaces/intern';
import { HttpServerService } from 'src/app/servers/http-server.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  listOfUsers: UserRegister[];

  constructor(private http: HttpServerService) {
    this.listOfUsers = null;
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.http.getWithToken<UserRegister[]>('users/getAllUsers')
      .subscribe(
        res => {
          this.listOfUsers = res
        },
        err => {
          console.log(err);
        }
      )  
  }
}
