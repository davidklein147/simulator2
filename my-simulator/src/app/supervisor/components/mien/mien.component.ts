import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/servers/data.service';

@Component({
  selector: 'app-mien',
  templateUrl: './mien.component.html',
  styleUrls: ['./mien.component.css']
})
export class MienComponent implements OnInit {

  constructor(public data: DataService, ) { }

  ngOnInit(): void {
  
  }

  
  
}