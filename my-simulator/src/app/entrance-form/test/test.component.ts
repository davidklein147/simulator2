import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { Form } from '../form';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  inputs: object = {}
  form: Form<any>;

  constructor() {
    // this.inputs[0] = {name: 'userName'}
    // this.inputs[1] = {name: 'password'}
    // this.inputs[2] = {name: 'authPassword', event: "input"}
    this.inputs = {
      userName: "user name",
      password: 'password',
      authPassword:'auth password'
      
    }
    this.form = new Form(this.inputs)

    console.log( this.form.inputs[2].name);
    
  }

  ngOnInit(): void {
    
     }

  }


