import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servers/data.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  
  isCreate: boolean;

  constructor(public data: DataService) {
    this.data.isCreate().subscribe(b => this.isCreate = b)
  }

  ngOnInit(): void {
  }

}
