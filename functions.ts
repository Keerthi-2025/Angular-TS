function addNum(x1:number,x2:number):void{    //fun funname (return type)
    console.log(x1 + x2);
}

addNum1(10,20);


function subNumber1(x1:number,x2:number){
    return x1+x2;
}

var x = subNumber(20,10);
console.log(x);


function demo(x1:string, x2:number):string{
    return x1 +x2;
}
var x:string = demo("mike", 20);
console.log(x);

function test():void{
    console.log("hello world");

}

test();

function test1(x1:string,x2:string):string{
    return x1 + "." x2;   // ' '    ','     ` `   '.'

}

var val:string = test1("mike", "make");
console.log(val);

//default parameters (provide ?)
function def(x1:number,x2:number = 100):void{
    console.log(x1);
    console.log(x2);
}

def(10);

//for loop
function test2(n:null[]):void{
    for(var a:number=0;x<n.length;x++){
        console.log(n[x]);
  }

}
  var a1:number[]=[1,2,3];
  test2(a1);


//Rest parameters
function test3(i:string,...n:number[]):void{
    for(var x:number=0;x<n.length;x++){
        console.log(n[x])
    }
}
test3(10,20,30);