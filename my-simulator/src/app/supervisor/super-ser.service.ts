import { Injectable } from '@angular/core';
import { HttpServerService } from '../servers/http-server.service';

@Injectable({
  providedIn: 'root'
})
export class SuperSerService {

  constructor(private http: HttpServerService) { }

  createUser(data:{}):void{
    this.http.postWithToken("users/createUser",data).subscribe(res =>{
      console.log(res);
      
    })
  }
}
