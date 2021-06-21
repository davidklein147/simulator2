import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servers/data.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  
  isCreate: boolean;
  name: string;

  constructor(public data: DataService) {
    this.data.isCreate().subscribe(b => this.isCreate = b)
    this.name =JSON.parse( localStorage.getItem("name"));
    console.log(this.name);
    
  }

  ngOnInit(): void {
    this.setName()
  }

  setName():void{
    this.data.getName().subscribe(name =>{
      localStorage.setItem("name",JSON.stringify(name))
      this.name = name;
    })
  }

}
