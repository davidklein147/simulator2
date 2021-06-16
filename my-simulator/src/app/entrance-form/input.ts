import { OnInit } from "@angular/core";
import { Purpose } from "./purpose";

export class Input  {
    type: string;
    label: string;
    name: string;
    event: string;

    constructor(key: string, value:any, event?) {
        console.log((typeof(value) == typeof("string")));
        
        this.name = key;
        this.label = (typeof(value) == typeof("string"))? value: value.name;
        this.event = value.event ? value.event : "";
        console.log(this.event);

        switch (key) {
            case 'email':
            case 'password':
                this.type = key;
                break;
            case 'authPassword':
                this.type = "password";
                break;
            default:
                this.type = 'text'
                break;
        }      
    }

    OnInit(): void {
    //   if(this.event){
            // document.getElementById(this.name).addEventListener(this.event,() =>{console.log("event");
            // })
        // }
    }

}
