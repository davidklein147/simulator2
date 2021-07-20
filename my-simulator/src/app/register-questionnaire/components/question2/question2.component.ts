import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {} from 'events';
import { HttpServerService } from 'src/app/servers/http-server.service';
import { Personally } from '../profil';
import { ProfilService } from '../profil.service';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  @Output() page: EventEmitter<number> = new EventEmitter<number>();
 

  personally:  Personally;
  academics: any;              

  scops : {
    NY:string[],
    isriel:string[] 
  }
  stetes: string[];
  citys:string[];

  constructor(private profil:ProfilService, private http: HttpServerService ) {
    this.personally = new Personally();
    //  {
    //   age: null,
    //   country: '',
    //   city: '',
    //   greduationYear: '',
    //   academicIinstitution: ''
    // };

    this.scops = {
      NY: ["Bruklin", "wilumsburg"],
      isriel:["jarusilem", "beny brak"]
    }

    this.stetes = Object.keys(this.scops)
   }

  ngOnInit(): void {
    this.getAcademics();
  }

  getAcademics():void{
    this.http.getWithToken('academics/getallacademics').subscribe(res =>{
      console.log(res);
      
      this.academics = res
    })
  }
  valueChange(event:any):void{
    //this.personally.academicIinstitution = event.name
    console.log(event.name);
    console.log( this.personally.academicIinstitution);
    
    
  }

  stetesList():void{
    this.citys = this.scops[this.personally.country];
    console.log(this.citys)
  }

  sendDetails(): void {
    this.profil.set("personally", this.personally)
    this.page.emit(1);
  }

}
