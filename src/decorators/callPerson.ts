import {addAge} from "./decoratorAge"

@addAge(35)
export class CallPerson {
    public name:string = "Person with age added through class decoration"
    constructor() {
        console.log("person contructor called")
    }
}

