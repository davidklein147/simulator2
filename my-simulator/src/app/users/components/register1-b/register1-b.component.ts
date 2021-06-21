import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/intern';
import { DataService } from 'src/app/servers/data.service';
import { HttpServerService } from 'src/app/servers/http-server.service';

@Component({
  selector: 'app-register1-b',
  templateUrl: './register1-b.component.html',
  styleUrls: ['./register1-b.component.css']
})
export class Register1BComponent implements OnInit {

  isUse: boolean;
  isAvailable: string;
  isEqual: boolean;
  isEqualMassege: string;


  constructor(private data: DataService, private http: HttpServerService, private router: Router) {
    this.isUse = false;
    this.isAvailable = "";
  }

  ngOnInit(): void {
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

  checkIsSame(password1: string, password2: string): void {
    this.isEqual = password1 === password2;
    this.isEqualMassege = this.isEqual ? "correct password" : "not correct password";
  }

  send(register:Login): void {
    this.data.inteinRegister.register = register;
    this.data.regDB();
    this.data.isCreate().subscribe(up =>{
      if(up){
        if(this.data.userName){
          this.router.navigate(['/thanks'])
        }
      }
    })

  }

}
