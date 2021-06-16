import { Injectable } from '@angular/core';
import { DataService } from 'src/app/servers/data.service';
import { HttpServerService } from 'src/app/servers/http-server.service';
import { Profil } from './profil';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  profil:Profil = new Profil()
  // profilo: {
    // userId:string
    // personally: object;
    // profassionally: {
      // medicalIinstitution: string,
      // residency: string,
      // department: string,
      // yearInResidency: number;
    // }
  // }

  constructor(private http:HttpServerService ,private data: DataService) {
    // this.profilo = {
      // userId: data.data._id,
      // personally: {
        // age: '',
        // country: '',
        // city: '',
        // greduationYear: '',
        // academicIinstitution: ''
      // },
      // profassionally: {
        // medicalIinstitution: '',
        // residency: '',
        // department: '',
        // yearInResidency:null
      // }
    // }
  }

  set<T>(key: string, data: T): void {
    console.log(key, data);
    this.profil[key] = data;
  }

  regDB():void{
    console.log(this.profil);
    this.http.postWithToken<any>("api/interns/regmoreinfo",this.profil)
    .subscribe(res =>{
      console.log(res);
    },
    err =>{
      console.log(err); 
    })
  }
}
