import { Injectable } from '@angular/core';
import { DataService } from 'src/app/servers/data.service';
import { HttpServerService } from 'src/app/servers/http-server.service';
import { Profil } from './profil';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  profil:Profil;

  constructor(private http:HttpServerService ,private data: DataService) {
    this.profil = new Profil(JSON.parse(localStorage.getItem("data"))._id)
    console.log(JSON.parse(localStorage.getItem("data"))._id);
    
  }

  set<T>(key: string, data: T): void {
    console.log(key, data);
    this.profil[key] = data;
  }

  regDB():void{
    console.log(this.profil);
    this.http.postWithToken<any>("interns/regmoreinfo",this.profil)
    .subscribe(res =>{
      console.log(res);
    },
    err =>{
      console.log(err); 
    })
  }
}
