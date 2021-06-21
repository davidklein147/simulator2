import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servers/data.service';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {

  constructor(public data: DataService) { 
    data.isLogin = false
  }

  ngOnInit(): void {
  }

  log(): void {
    console.log("test");
    console.log(this.data.isLogin);
    localStorage.setItem("isLogin", JSON.stringify(true));
    this.data.isLogin = JSON.parse(localStorage.getItem("isLogin"))
    console.log(this.data.isLogin);
    
  }

}
