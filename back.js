function back(name, city) {
    console.log("".concat(name, ".").concat(city));
}
back("mike", "mangalore");
//Arrow function                    //(method inside method can be created in arrow function)
var x = function (a1, a2) {
    return a1 + a2;
};
var res = x(10, 20);
console.log(res);
//var x = (a1:number,a2:number):number => a1+a2; )return must be used with the flower brackets
//var test = ():void{
//  console.log("hello");
//}
//test();
var num = function (x1, x2) {
    return x1 * x2;
};
var result = num(1, 2);
console.log(result);
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//enum -> used ofr consant values like year numbe rof days, weeks
var Values;
(function (Values) {
    Values[Values["red"] = 0] = "red";
    Values[Values["blue"] = 1] = "blue";
    Values[Values["green"] = 2] = "green";
})(Values || (Values = {}));
console.log(Values);
console.log(Values[0]);
//let and const has block restrication, they wont worl outside the for loops etc.
//var will work outside and inside the block, it s nit block restricted
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.test = function () {
        this.id = 10; //to access non stactic variable using this keyword
        this.city = "mike";
        console.log(this.id);
        console.log(this.city);
    };
    return A;
}());
var a1 = new A();
a1.test();
