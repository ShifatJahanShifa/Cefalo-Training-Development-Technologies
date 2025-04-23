// // workaround of default param when it is desired to be undfined.

// const useUndefined = Symbol("use-undefined");

// function greet(name = "Anonymous") {
//   if (name === useUndefined) name = undefined;
//   console.log("Hello,", name);
// }

// greet();                  // Hello, Anonymous
// greet("Alex");            // Hello, Alex
// greet(undefined);         // Hello, Anonymous
// greet(useUndefined);      // Hello, undefined ✅

// (() =>{
//   console.log('shifa');
  
// })()

'use strict'

let str='shifa'
str.length=9
console.log(str.length);

