import {CallPerson} from "./decorators/callPerson"

import * as Rx from 'rxjs'
import {TestRxJs} from './objRxJs'

//Test rxjs
let testRsjs:TestRxJs = new TestRxJs();
//map and mapto
//testRsjs.mapAndMapTo();

//do operator
//testRsjs.doOperator();

//filterOperator
//testRsjs.filterOperator().subscribeToStream();

//take skyp first
//testRsjs.takeFirstSkyp().subscribeToStream();

//last takelast
//testRsjs.takeLastLastSkypeLast().subscribeToStream();

//Sartwith and concat
//testRsjs.concatStartWith().subscribeToStream();

//Merge
//testRsjs.merge().subscribeToStream();


//scan
//testRsjs.scan().subscribeToStream();

//delay
testRsjs.delay().subscribeToStream();



//decorators
var personObj:any = new CallPerson();
console.log("Person age: "+ personObj.age);


