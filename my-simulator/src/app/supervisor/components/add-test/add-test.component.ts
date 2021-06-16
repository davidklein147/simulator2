import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable, Subscription } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  path: File[];
  _path: string;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>[] = [];
  pros = 0;
  downloadURL: string[] = [];

  constructor(private fbStorage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  addFileToStorage(event: any): void {
    this.path = event.target.files

    console.log(this.path);
  }

  upload() {
    for (let index = 0; index < this.path.length; index++) {
      
      const _path = `${Math.random().toString().substring(2)}${this.path[index].name}`
      console.log(_path);
      const task = this.fbStorage.upload(_path, this.path[index]);
      // this.uploadProgress[index] = 
      task.percentageChanges().pipe(finalize(() => {
        this.fbStorage.ref(_path).getDownloadURL().subscribe(res => {
          console.log({res});
          
          this.downloadURL.push(res)
          console.log(this);
        })
      })).subscribe(res=>{
        this.pros = res;
      });
    }
  }

}
