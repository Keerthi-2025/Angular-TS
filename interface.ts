interface H{
    test():void;            //function keyword is not used inside class and interface
}
class G implements H{
    test(): void{
        console.log("test");

    }        
    
}

var b = new G();
b.test();


class J{
    static x:number = 10;
}
console.log(J.x);

var j = new J();
console.log(j);
console.log(J.x);


//static method
class K1{
     static test1():void{
        console.log("From test");
     }
}
K1.test1();