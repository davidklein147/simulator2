import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InternDetailsComponent } from '../users/components/register1/intern-details.component';
import { resLogin, User, UserRegister } from '../interfaces/intern';
import { HttpServerService } from './http-server.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  updateIsCreate: BehaviorSubject<boolean>;
  userName: BehaviorSubject<string>;
  inteinRegister: UserRegister = new UserRegister();
  isLogin = JSON.parse(localStorage.getItem("isLogin"));
  img: string;
  code: string;
  data: resLogin;

  constructor(private httpServer: HttpServerService) {
    this.userName = new BehaviorSubject<string>( localStorage.getItem("isLogin")? localStorage.getItem("name"):'')
    this.updateIsCreate = new BehaviorSubject<boolean>(this.userName? true: false);
    this.code = null;
    this.img = null;
    
  }

  sendCode(): void {
    console.log("sendCode");
    this.code = Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
  }

  displayCode(): Observable<string> {
    return of(this.code);
  }

  regDB(): void {
    this.httpServer.createIntern(this.inteinRegister).subscribe(
      res => {
        this.data = res;
        this.updateIsCreate.next(true);
        localStorage.setItem("name", res.name)
        this.userName.next(localStorage.getItem("name"))
      },
      err => {
        this.updateIsCreate.next(false);
        console.log(err);
      });
  }

  isCreate(): Observable<boolean> {
    return this.updateIsCreate;
  }

  getName():Observable<string>{
    return this.userName;
  }

}
