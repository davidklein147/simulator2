import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servers/data.service';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.css']
})
export class OptionsListComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

}
