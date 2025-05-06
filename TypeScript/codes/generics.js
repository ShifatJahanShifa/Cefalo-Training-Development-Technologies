"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// when to use generics
// at first support only numbers
// function getFirstElement(array: number[])
// {
//     array[2]=9
//     return array[0]
// }
// let array=[1,2,3]
// console.log(getFirstElement(array));
// console.log(array);
// need to support string array
// function getFirstElement(array: any)
// {
//     array[2]=9
//     return array[0]
// }
// let array=[1,2,3]
// console.log(getFirstElement(array));
// // console.log(array);
// let strings: string[]=['a','s','f']
// console.log(getFirstElement(strings));
// using union
// function getFirstElement(array: (number | string)[])
// {
//     array[2]=9
//     return array[0]
// }
// let array=[1,2,3]
// console.log(getFirstElement(array));
// // console.log(array);
// let strings: string[]=['a','s','f']
// console.log(getFirstElement(strings));
// now using generics
function getFirstElement(array) {
    // array[2]=9
    return array[0];
}
var array = [1, 2, 3];
console.log(getFirstElement(array));
// console.log(array);
var strings = ['a', 's', 'f'];
console.log(getFirstElement(strings));
