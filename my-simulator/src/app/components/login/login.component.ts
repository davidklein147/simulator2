import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/interfaces/intern';
import { DataService } from 'src/app/servers/data.service';
import { HttpServerService } from 'src/app/servers/http-server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private data: DataService, private http: HttpServerService) {
    this.data.updateIsCreate.next(true);
  }

  ngOnInit(): void {
  }

  send(login: Login): void {
    console.log(login);
    if (login.userName && login.password) {
      this.http.login(login).subscribe(res => {
        console.log(res);
      })
    }
  }
}
