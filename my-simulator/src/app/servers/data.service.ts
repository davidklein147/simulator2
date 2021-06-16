import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InternDetailsComponent } from '../components/register1/intern-details.component';
import { resLogin, User, UserRegister } from '../interfaces/intern';
import { HttpServerService } from './http-server.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  updateIsCreate: BehaviorSubject<boolean>;
  inteinRegister: UserRegister = new UserRegister();
  isLogin = JSON.parse(localStorage.getItem("isLogin"));
  img: string;
  code: string;
  data: resLogin;

  constructor(private httpServer: HttpServerService) {
    this.updateIsCreate = new BehaviorSubject<boolean>(false);
    this.code = null;
    this.img = null;
    var a = JSON.stringify(this.inteinRegister);
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
        console.log(res);
        console.log(this.httpServer.token);
      },
      err => {
        this.updateIsCreate.next(false);
        console.log(err);
      });
  }

  isCreate(): Observable<boolean> {
    return this.updateIsCreate;
  }
}
