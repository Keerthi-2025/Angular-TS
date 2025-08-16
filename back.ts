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


//let and const has block restrication, they wont worl outside the for loops etc.
//var will work outside and inside the block, it s nit block restricted

class A{                      //ctrl+. for errors
    id:number;
    city:string;

    test():void{
        this.id=10;         //to access non stactic variable using this keyword
        this.city="mike";
        console.log(this.id);
        console.log(this.city);

    }
}

var a1 = new A();
a1.test();

//ts can have only one constructor, to create construcotr we use constructor keyword
class B{
    constructor(){
        console.log(100);
    }
}
var a2 = new B();


//const with argumnets
class C{
    constructor(city:string,id:number){
        //this.x= city;
        //this.y= id;
        //console.log(this.x);
        console.log(`${city} ${id}`);
    }

}
var c1 = new C("jon",1);

//accessing outside the class
class D{
    x:string = "mike";
    y:number = 2;
}
var d = new D();
console.log(d.x); //this is used to acess the object insde the class. Object reference is used to access outside the class
console.log(d.y);

