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
