
import * as Rx from "rxjs";

export class TestRxJs{
    public name:string;
    private  stream1:Rx.Observable<any>;
    private streamCommon:Rx.Observable<any>;
    constructor(){
        this.stream1 = Rx.Observable.interval(100).take(10);
    }

    mapAndMapTo(){ 
        var stream2 = this.stream1.map((x)=>x*2).subscribe((x)=>console.log(`Map from objservable: ${x*2}`));
        var stream3 = this.stream1.mapTo(5).subscribe((x)=>console.log(`MapTo objservable: ${x*2}`));
    }
     doOperator(){
         this.stream1.do((x)=>{console.log(`From do : ${x}`)}).subscribe((x)=>console.log(`Test: ${x}`));
     }
     filterOperator(){
         this.streamCommon = this.stream1.filter(x=>x%2===0);
         return this;
     }

     takeFirstSkyp(){
         this.streamCommon = this.stream1.skip(2).take(3).first();
         return this;
     }

     takeLastLastSkypeLast(){
         this.streamCommon = this.stream1.take(5).takeLast(2).last();
         return this;
     }
     concatStartWith(){
        this.streamCommon = this.stream1.startWith(4).concat(Rx.Observable.of(3,4,5));
         return this;
     }
     merge(){
         this.streamCommon = Rx.Observable.interval(300).merge(Rx.Observable.interval(500));
         return this;
     }
//vertical combination operator
     combineLatest(){
         return this;
     }

     withLaterstForm(){
          
     }

     zip(){
          
     }
//horizontal operator
     scan(){
        let streamH = Rx.Observable.of('h','e','l','l','o');
        this.streamCommon = streamH.scan((acc,x,i)=> acc+x ,'');
        return this;
     }
     buffer(){
        //BufferCount,BuffetTime,Buffer         
     }

     delay(){
         //delaywhen

         let streamD = Rx.Observable.of('h','e','l','l','o').zip(Rx.Observable.interval(100),(x,z)=>z);

         this.streamCommon = streamD.delayWhen(x=> Rx.Observable.interval(x*3000).take(2));
         return this;
     }

     debounce(){
        //debounceTime,throttlerTime, throttle
     }

     distinct(){
         //distinctUntilChanged
         //Rx.Observable.never()
         //Rx.Observable.empty()
     }

     //swichMap, swichMapTo, takeUntill, mapTo, scan


     subscribeToStream(){
        this.streamCommon.subscribe((x)=> {console.log(`Value: ${x}`)},
                                    (y)=>{ console.log("Error")},
                                    ()=>{console.log("Done")});
     }
}