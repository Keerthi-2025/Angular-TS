var G = /** @class */ (function () {
    function G() {
    }
    G.prototype.test = function () {
        console.log("test");
    };
    return G;
}());
var b = new G();
b.test();
var J = /** @class */ (function () {
    function J() {
    }
    J.x = 10;
    return J;
}());
console.log(J.x);
var j = new J();
console.log(j);
console.log(J.x);
//static method
var A1 = /** @class */ (function () {
    function A1() {
    }
    A1.test1 = function () {
        console.log("From test");
    };
    return A1;
}());
A1.test1();
