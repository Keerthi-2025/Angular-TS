function back(name:string,city:string):void{  //usage of backtick
    console.log(`${name}.${city}`);
}
back("mike","mangalore");

//Arrow function                    //(method inside method can be created in arrow function)
var x = (a1:number,a2:number):number =>{
    return a1+a2;
};
var res:number = x(10,20);
console.log(res);


//var x = (a1:number,a2:number):number => a1+a2; )return must be used with the flower brackets

//var test = ():void{
  //  console.log("hello");
//}
//test();

var num = (x1:number,x2:number):number=>{
    return x1 *x2;
};
var result:number = num(1,2);
console.log(result);

var arr:number[]=[1,2,3,4,5,6,7,8,9,10];
for(var i:number=0;i<arr.length;i++){
    console.log(arr[i]);
}

//enum -> used ofr consant values like year numbe rof days, weeks
enum Values{
    red,
    blue,
    green
}
console.log(Values);
console.log(Values[0]);