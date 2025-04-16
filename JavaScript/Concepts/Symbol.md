# Symbol 
Symbols are unique and immutable primitive datatype in javascript which was introduced in ES6. They are often used to create unique property keys for objects ensuring no collisions occurr. Each symbol value is distinct even when multiple are created using same description. It can br created using `Symbol()` function. We use it to create special or hidden properties of objects.   

Before the invent of `symbol` in ES6 in 2015, we could not achieve uniqueness using then existing primitive data types.  

console.log(obj.k1);
console.log(obj.k2);

here is a concern. we cannot access the symbol property name using `.` . we need to change the access style. we need to use `[]`.  

in `for...in` loop, symbol is got ignored. Also, symbol is ignored in `JSON.stringy()`
