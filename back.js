var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//var will work outside and inside the block, it s not block restricted
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
//ts can have only one constructor, to create construcotr we use constructor keyword
var B = /** @class */ (function () {
    function B() {
        console.log(100);
    }
    return B;
}());
var a2 = new B();
//const with argumnets
var C = /** @class */ (function () {
    function C(city, id) {
        //this.x= city;
        //this.y= id;
        //console.log(this.x);
        console.log("".concat(city, " ").concat(id));
    }
    return C;
}());
var c1 = new C("jon", 1);
//accessing outside the class
var D = /** @class */ (function () {
    function D() {
        this.x = "mike";
        this.y = 2;
    }
    return D;
}());
var d = new D();
console.log(d.x); //this is used to access non-stactic inside the class. Object reference is used to access non-stactic outside the class
console.log(d.y);
var E = /** @class */ (function () {
    function E() {
    }
    return E;
}());
var e = {
    "id": 1,
    "city": "chennai"
};
console.log(e.id);
console.log(e.city);
//constroctor based injection
var E1 = /** @class */ (function () {
    function E1(id) {
        this.id = id;
    }
    return E1;
}());
//inhertitance       (multiple inheritance is not allowed in TS)
var I = /** @class */ (function () {
    function I() {
    }
    I.prototype.testi = function () {
        console.log("Inheritance");
    };
    return I;
}());
var I1 = /** @class */ (function (_super) {
    __extends(I1, _super);
    function I1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return I1;
}(I));
var i1 = new I1();
i1.testi();
//overriding
var I = /** @class */ (function () {
    function I() {
    }
    I.prototype.testi = function () {
        console.log("Inheritance");
    };
    return I;
}());
var I1 = /** @class */ (function (_super) {
    __extends(I1, _super);
    function I1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    I1.prototype.testi = function () {
        console.log("Inheritance");
    };
    return I1;
}(I));
var i1 = new I1();
i1.testi();
//arrow function
var O = /** @class */ (function () {
    function O() {
    }
    O.prototype.testo = function () {
        var o = function () {
            console.log(100);
        };
        O;
    };
    return O;
}());
var o1 = new O();
o1.testo();
