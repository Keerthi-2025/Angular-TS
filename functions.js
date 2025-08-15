function addNum(x1, x2) {
    console.log(x1 + x2);
}
addNum1(10, 20);
function subNumber1(x1, x2) {
    return x1 + x2;
}
var x = subNumber(20, 10);
console.log(x);
function demo(x1, x2) {
    return x1 + x2;
}
var x = demo("mike", 20);
console.log(x);
function test() {
    console.log("hello world");
}
test();
function test1(x1, x2) {
    return x1 + ".";
    x2; // ' '    ','     ` `   '.'
}
var val = test1("mike", "make");
console.log(val);
//default parameters (provide ?)
function def(x1, x2) {
    console.log(x1);
    console.log(x2);
}
def(10);
