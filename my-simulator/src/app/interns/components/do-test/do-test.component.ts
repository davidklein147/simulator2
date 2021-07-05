import { ElementRef, Renderer2 } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { HttpServerService } from 'src/app/servers/http-server.service';
import { FileUpload } from 'src/app/supervisor/file-upload';

@Component({
  selector: 'app-do-test',
  templateUrl: './do-test.component.html',
  styleUrls: ['./do-test.component.css']
})
export class DoTestComponent implements OnInit {
  @ViewChild('downloadFile') el: ElementRef;

  testList: FileUpload[];
  fileUrl = '';

  constructor(private http: HttpServerService, private storageRef: AngularFireStorage, private rd: Renderer2) {

  }

  ngOnInit(): void {
    this.http.getWithToken<FileUpload[]>("supervisor/getAllTests").subscribe(res => {
      this.testList = res;
      console.log(this.testList);

    },
      err => {
        console.error(err);

      })
  }
  public downloadFile(url: string, name: string): void {
    this.http.getImage(url).subscribe(res => {
      console.log(res);
      var newBlob = new Blob([res], { type: "application/pdf" });
      const data = window.URL.createObjectURL(newBlob);
      var link = document.createElement('a');
      link.href = data;
      link.download = name;
      link.click();
    })
  }

}
