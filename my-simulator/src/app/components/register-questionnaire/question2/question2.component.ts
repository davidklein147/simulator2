import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {} from 'events';
import { Personally } from '../profil';
import { ProfilService } from '../profil.service';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  @Output() page: EventEmitter<number> = new EventEmitter<number>();
 

  personally: Personally;              

  scops : {
    NY:string[],
    isriel:string[] 
  }
  stetes: string[];
  citys:string[];

  constructor(private profil:ProfilService ) {
    this.personally = {
      age: null,
      country: '',
      city: '',
      greduationYear: '',
      academicIinstitution: ''
    };

    this.scops = {
      NY: ["Bruklin", "wilumsburg"],
      isriel:["jarusilem", "beny brak"]
    }

    this.stetes = Object.keys(this.scops)
   }

  ngOnInit(): void {
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
