# utility Type
Typescript provides some uitlity types that are used to manipulate and transform existing types. Below are the description: 

`Partial` Makes all the properties of a type optional. This is useful when we want to create object which is subset of properties of an existing type. That means I want some specific properties on that object of the existing types. I may need all the properties in other object reference but for some object i don't need all of the properties.I just need **subset** of the properties. We can make partial in the first level of object properties.
**Syntax** Partial<T>

`Readonly` makes all the properties of an object type readonly. we cannot assign a value to it further. It is useful in the context where we cannot reassign to a frozen object.
**Syntax** Readonly<T>

`Pick` 

`Awaited` emulates the behavior of await in js. recursively unwraps promises. It takes the type which is promise and returns the type in which the promise will resolve to. It simulates the behavior of **await** keyword in js. 