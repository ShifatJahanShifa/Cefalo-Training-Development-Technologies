// demo of block scope
// if(true){
//     let a = 10;
//     var b = 20;
//     const c=30;
// }

// // console.log(a); // ReferenceError: a is not defined
// // console.log(c); // 20
// console.log(b); // 20 




// demo of function scope
// function aa()
// {
//     console.log("hello");
//     let a = 10;
//     var b = 20;
//     const c=30;
// }

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined      
// console.log(c); // ReferenceError: c is not defined

// function b()
// {
//     console.log("world");
// }

// global scope; weird

{
    d=0;
}
console.log(d); // 0`