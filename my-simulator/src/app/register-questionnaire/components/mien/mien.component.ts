import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../profil.service';

@Component({
  selector: 'app-mien',
  templateUrl: './mien.component.html',
  styleUrls: ['./mien.component.css']
})
export class MienComponent implements OnInit {

  pageNum: number;

  constructor(private profil:ProfilService) {
    this.pageNum = 1;
   }

  ngOnInit(): void {
  }

  sendDetails(key:string, data:object):void{
    this.profil.set(key,data)
  }

  updatePage(pageNum?: number):void{
    if(this.pageNum <3){
    this.pageNum++;
    }
  }
  downdatePage():void{
    if(this.pageNum > 1){
      this.pageNum--;
      }
  }
  page(e:number):void{
    this.pageNum +=e;
  }

}
