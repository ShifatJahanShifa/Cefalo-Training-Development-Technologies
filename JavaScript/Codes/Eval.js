console.log(eval("2 + 2"));
// Expected output: 4

console.log(eval(new String("2 + 2")));
// Expected output: 2 + 2

console.log(eval("2 + 2") === eval("4"));
// Expected output: true

console.log(eval("2 + 2") === eval(new String("2 + 2")));
// Expected output: false

let a=5;
console.log(eval("a + 2"));

const obj={
    b: 10
}
console.log(eval("obj.b+7"))

console.log(eval("let x=10, y=9; console.log(x)"))

let value=eval("let x=10, y=9; let s='shifa'; s")
console.log(value)
// console.log(s)
eval("function f(a){ return a + 1; }");
console.log(f(5)); // Expected output: 6


// eval scope differs for variable and functions. variable declared with let and const cannot be accessed. but with var it can be accessed.
// whereas functions are hoisted and available in global or current scope. 
eval("var x = 10; const s='shifa'; function greet() { return 'Hello!'; }");

console.log(typeof s); // Output: undefined (x is not accessible)
console.log(greet());  // Output: Hello! (greet is accessible)