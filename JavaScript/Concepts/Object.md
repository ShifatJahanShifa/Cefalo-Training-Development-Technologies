# JS object methods 
Js object methods are grouped into three categories.
1. General methods
2. property management methods
3. object protection methods

## General Methods
1. Object.assign(targetobj,sourceobj)
2. Object.entries(obj)  // return 2D array of key/value
3. Object.fromEntries(array)
4. Object.values(obj)  // return 1D array of value only
5. Object.groupBy()  // 
>Object.groupBy() vs Map.groupBy()
The difference between Object.groupBy() and Map.groupBy() is:

Object.groupBy() groups elements into a JavaScript object.

Map.groupBy() groups elements into a Map object. 
6. Object.keys()
7. Object.create(object)  

## Property Management Methods
1. Object.defineProperty(object, property, description) : add, change.
> property attributes    

All properties have a name. In addition to that, they have attributes. `value` is one of them. Others are `configurable`, `enumerable`, `writable`. These attributes define whether a property is writable or readable? In js, all attributes can be read but only `value` attribute can be changed. The condition for that is the property must be writable. 
2. Object.getOwnPropertyNames(ob)  // includes non-enumerable
3. Object.keys() // exclude non-enumerable

## Object protection methods
1. Object.preventExtensions(obj)  // can't add new property to object
2. Object.isExtensible(obj) 
3. Object.seal()  // prevent addition or deletion of existing properties. it is a superset of preventExtensions() 
4. Object.isSealed() 
5. Object.freeze()  // read-only. no create, update, delete
