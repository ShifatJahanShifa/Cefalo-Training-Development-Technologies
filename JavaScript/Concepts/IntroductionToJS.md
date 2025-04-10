I will write only those contents which seem important or informational to me😃

<li> Beside browser, javascript can be used in non browser environment. Such as Node.js for writing server side code in js, Electron fr writing desktop application, React Native for mobile application.  
<li> JS is:   
1. lightweight 2. interpreted or JIT compilation 3. has first class functions
<li> <b>JIT</b> (just-in-time) compilation is a process in which a code is translated from an intermediate representation (java bytecode [.class]) or a high level language (javascript) into machine level code at <i>runtime</i>   
<li> A programming language is said to have First-class functions when functions in that language are treated like any other variable pr value. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.   

Examples:  
Assigning to a variable as a value
```JS
const foo = () => {
  console.log("foobar");
};
foo(); // Invoke it using the variable
// foobar
``` 

Passing a function as an argument to another function
```JS
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!
```
N.B: here `sayHello` is a callback function.

Returing from a function
```JS
function sayHello() {
  return () => {
    console.log("Hello!");
  };
}
```
N.B: A function that returns a function or takes other functions as arguments is called a higher-order function.
<li> It is a prototype based programming.
<li> JS is a single threaded language.
<li> Using <code>eval</code>, we can dynamically create script. 
Syntax:       

```JS
eval(script)
```
Here, the script or code is in string format. The eval function evaluates the string and return its result. 
```JS
console.log(eval("2 + 2"));
// Expected output: 4

console.log(eval(new String("2 + 2")));
// Expected output: [String: '2 + 2']. Because when the input of the eval function is not primitive string rather an object, it returns the object (input) as it is. It does not evaluate the string object. 

console.log(eval("2 + 2") === eval("4"));
// Expected output: true

console.log(eval("2 + 2") === eval(new String("2 + 2")));
// Expected output: false
```
Here, the script can be expression, statement, sequence of statements. The expression can include variables and properties of existing object. It will be parsed as a script. So `import` declaration is not allowed. `Import` only works with modules.   
If the completion value is empty, then `undefined` is returned.   
Eval function is a property function of global object. Using eval function, we can create script/code dynamically.