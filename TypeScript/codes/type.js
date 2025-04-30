"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function check(a: number) {
//     console.log(a);
//     return 0;
// }
// let res=check(2)
// console.log(res, typeof res);
var f1 = function () {
    return true;
};
var inv = f1();
console.log(typeof inv, inv);
function greet(person) {
    console.log('hello, ' + person.name);
}
var user = { name: 'shifa', age: 23 };
greet(user);
