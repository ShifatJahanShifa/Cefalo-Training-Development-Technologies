# void 

## check
console.log(Object.getOwnPropertyDescriptor(globalThis, 'undefined'));
console.log(Object.getOwnPropertyDescriptor(globalThis, 'NaN'));
console.log(Object.getOwnPropertyDescriptor(globalThis, 'Infinity'));

## Usages
But you might still see it in:

1. Legacy code
2. Minified JavaScript
3. Libraries aiming for ultra compatibility

## Reference
ECMAScript 3 §15.1.1.3
ECMAScript 5.1 §15.1.1.3

Here's the relevant part:

The value of the undefined property is undefined. This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.