import { Input } from "./input";
import { Purpose } from "./purpose";

export class Form<T>{
    //purpose: Purpose;
    inputs: Input[];
    obj: T;

    constructor(obj: T) {
        this.obj = obj;
        this.inputs = [];

        for (const [key, value] of Object.entries(obj)) {
            let input = new Input(key, value)
            this.inputs.push(input);
        }
    }
}