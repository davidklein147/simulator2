import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Professionally } from '../profil';
import { ProfilService } from '../profil.service';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component implements OnInit {

  @Output() page: EventEmitter<number> = new EventEmitter<number>();

  rangeValue = 0;
  profassionally: Professionally;

  constructor(private profil: ProfilService) {
    this.profassionally = profil.profil.profassionally;
  }

  ngOnInit(): void {
  }

  sendDetails(): void {
    console.log(this.profassionally);
    this.page.emit(1);
    this.profil.set("profassionally", this.profassionally)
    this.profil.regDB();
  }

}
