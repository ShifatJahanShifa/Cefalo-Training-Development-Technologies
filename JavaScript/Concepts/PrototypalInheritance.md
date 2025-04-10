# Prototypal Inheritance
Whatever we create in javascript like variable, object, array, function, the javascript engine adds some hidden properties , methods to them.     
Whenever we create an object (variable, object, array, function), the javascript engine puts those hidden properties and methods into an object and then attaches this object to our created object. Then we can access those hidden properties and methods from our object.   
`__proto__` this is the hidden object that js engine creates. here it means prototype. 

``` JS
Array.prototype and customObj.__proto__
``` 
Both of them have the same value. 

```JS
customObj.__proto__.__proto__ and Object.prototype
``` 
Both of them have the same value. 

Trick: after getting two objects, we can't get third object. doing `__proto__` will give us `null`.

**Prototype chain**

```JS
arr.__proto__ == Array.prototype
arr.__proto__.__proto__ == Object.prototype 

further 
arr.__proto__.__proto__.__proto__ is null.
```

So, the prototype of object prototype is actually `null`. The end of chain!    
So, the statement that **Everything in javascript is nothing but an object** maybe came from this. 

| Thing                 | What it is               | `.prototype`                            | `__proto__`                            |
|----------------------|--------------------------|------------------------------------------|----------------------------------------|
| `Function`           | A constructor             | ✅ Yes (`Function.prototype`)             | ✅ Yes (because it's also an object)   |
| `Array`              | A constructor             | ✅ Yes (`Array.prototype`)                | ✅ Yes                                  |
| `let arr = [1, 2]`   | An instance of `Array`    | ❌ No `.prototype`                        | ✅ Yes, points to `Array.prototype`    |
| `function Foo(){}`   | A constructor function    | ✅ `.prototype` defines instance props    | ✅ Yes (functions are objects too)     |
| `let obj = new Foo()`| An instance of `Foo`      | ❌ No `.prototype`                        | ✅ Points to `Foo.prototype`           |


