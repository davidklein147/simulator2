import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable, Subscription } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { DataService } from 'src/app/servers/data.service';
import { HttpServerService } from 'src/app/servers/http-server.service';
import { FileUpload } from '../../file-upload';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  path: File[];
  _path: string;
  task: AngularFireUploadTask;
  pros = [];
  downloadURL: string[] = [];
  fileUploads: FileUpload[]= []

  constructor(private fbStorage: AngularFireStorage, private data: DataService, private http: HttpServerService) { }

  ngOnInit(): void {
  }

  addFileToStorage(event: any): void {
    this.path = event.target.files
    console.log(event);
  }

  upload() {
    for (let index = 0; index < this.path.length; index++) {
      const fileUpload = new FileUpload(this.path[index].name,JSON.parse(localStorage.getItem("data"))._id );
      const _path = `${Math.random().toString().substring(2)}${this.path[index].name}`
      console.log(_path);
      const task = this.fbStorage.upload(_path, this.path[index]);
      task.percentageChanges().pipe(finalize(() => {
        this.fbStorage.ref(_path).getDownloadURL().subscribe(res => {
          fileUpload.url = res;
          console.log(fileUpload);
          this.http.postWithToken<any>('supervisor/addTest', fileUpload).subscribe(res=>{
            console.log("sub" + res);
            
          })
          console.log(fileUpload);
          this.downloadURL.push(res)
          console.log(this);
        })
      })).subscribe(res => {
        this.pros[index] = res
      })
    }
  }

}
