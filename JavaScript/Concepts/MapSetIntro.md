Before Map and Set, we had `object` and `array`. The features of these two are: 
1. object: the keys must be in `string` or `symbol`. we cannot use other datatypes for it like object, array, functions.
2. array: stores data in index based way.

The limitations with `object`: 
1. the keys must be in `string` or `symbol`. we cannot use other datatypes for it like object, array, functions.
2. it is not iterable
3. 


#### further findings:
problems with object and array:
object: 
1. it is not iterable.
2. keys must be string or symbol.
array:
1. to find existence of an item, we need to loop through the array. it takes o(n) time. 

that's why ES6 introduced map and set.
map: 
1. it is iterable.
2. keys can be anything even object. and i know in many cases we may need object as key like: dom element (which is object), request object, object itself in case when we don't find any appropriate key to use. 
set:
1. it is used we need unique item.
2. when we want to check existence of a value, it is faster than array lookup. 

Restrictions of WeakMap / WeakSet:
1. Not iterable — you can't loop through them.
2. No .size property — you can't count how many entries.
3. You can only use objects as keys or values (not primitives).

but why do we need weakmap and weakest? 
when we want to reference in weak manner. 