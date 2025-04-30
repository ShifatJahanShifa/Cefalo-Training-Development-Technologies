// const ob= {
//     a: 4
// }
// console.log(ob.a)
// let b: number
// b=9
// console.log(b)
// var userName
// userName='shifa'
// console.log(userName)
// userName=9
// console.log(userName);
// const obj={
//     p: 2,
//     b: 's'
// }
// console.log(obj)
function logLength(value) {
    console.log(value.length);
}
logLength("hello"); // ✅ OK
logLength([1, 2, 3]); // ✅ OK
logLength(42); // ❌ No error, but crashes at runtime: `undefined.length`
// function logLength<T extends { length: number }>(value: T): void {
//     console.log(value.length);
//   }
//   logLength("hello");    // ✅ OK
//   logLength([1, 2, 3]);  // ✅ OK
//   logLength(42);         // ❌ Compile-time error: number doesn't have `.length`
