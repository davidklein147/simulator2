import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/intern';
import { DataService } from 'src/app/servers/data.service';
import { HttpServerService } from 'src/app/servers/http-server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private data: DataService, private http: HttpServerService, private router: Router) {
    this.data.updateIsCreate.next(true);
  }

  ngOnInit(): void {
  }

  send(login: Login): void {
    console.log(login);
    if (login.userName && login.password) {
      this.http.login(login).subscribe(res => {
        console.log(res);
        
        if(res.roleNum < 100){
          this.router.navigate(["supervisor"])
        }
        else if(res.moreDetails == null){
          this.router.navigate(["thanks"])
        }
      })
    }
  }
}
