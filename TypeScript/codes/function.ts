export {}


// function type 
// example 01
// type ftype1=(a: number,b: number)=> number
// let ft: ftype1

// ft=(a,b)=>{
//     return a+b 
// }
// console.log(ft(2,3))

// // example 02
// type ftype2=(a: string) => void
// function greeter(fn: ftype2) {
//     fn("Hello, World");
//   }
   
// //   function printToConsole(s: string) {
// //     console.log(s);
// //   }
   
// //   greeter(printToConsole);

// const argf: ftype2=(s: string)=>{
//     console.log(s);
// }

// greeter(argf)

// call signature
// type DescribableFunction = {
//     description: string;
//     (someArg: number): boolean;
//   };
//   function doSomething(fn: DescribableFunction): void {
//     console.log(fn.description + " returned " + fn(6));
//   }
   
//   function myFunc(someArg: number) {
//     return someArg > 3;
//   }
//   myFunc.description = "default description";
   
//   doSomething(myFunc);   // see here i have got structural typing again


// function overloading
// example 01
// function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//   if (d !== undefined && y !== undefined) {
//     return new Date(y, mOrTimestamp, d);
//   } else {
//     return new Date(mOrTimestamp);
//   }
// }
// const d1 = makeDate(12345678);
// const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);




//  example 2
// function add(a: number, b: number): number
// function add(a: string,b: string): string 

// function add(a: any,b: any): any 
// {
//     return a+' '+b;
// }

// console.log(add(1,2))
// console.log(add('hello','world'));


// never
function fn(x: string | number) {
    if (typeof x === "string") {
      // do something
    } else if (typeof x === "number") {
      // do something else
    } else {
      x; // has type 'never'!
    }
  }