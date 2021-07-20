import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/servers/data.service';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.css']
})
export class OptionsListComponent implements OnInit {

  typeManager:string;
  constructor(public data: DataService,private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.navigate();
  }
  navigate():void{
    this.router.params.subscribe(parm =>{
      if(parm.role === "admin"){
        this.typeManager = "admin";
      }else if(parm.role === "supervisor"){
        this.typeManager = "supervisor"
      }
    })
  }

}
