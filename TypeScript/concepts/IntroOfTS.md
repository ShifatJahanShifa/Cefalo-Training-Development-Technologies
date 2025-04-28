# Introduction of Typescript 

## What is the issue with JavaScript?
Every language has some quirks. So does js. 
Problems: 
1. in comparision, js allows automatic coercion of the operands which results in unexpected behavior.
2. js also allows accessing of properties of object which are not present. 
3. in future, if there is an type related issue, it is difficult to debug.
4. As the codebase grows, tracking and ensuring correct data types across the app becomes challenging.

In small code, it is not problematic but in large scale application, in future it may create serious problem. That's why typescript came. 
TypeScript is superset of javascript. It adds optional type annotation for us. Typescript checks the error in the compile time while the javascript for any error, it will detect it in runtime. 

## How ts is related to js?
1. TypeScript doesn’t consider any JavaScript code to be an error because of its syntax.
2. TypeScript checks the type. Like accessing an object property which is not present, js will give us undefined result whereas ts will give us error. 
3. Also js allows number and empty array division which will result in infinity but ts will throw an error. 
4. Keeping the same runtime behavior as JavaScript is a foundational promise of TypeScript.
5. the compiled ts code removes the type information. 

## What ts provides?
1. autocompletion
2. navigation tool
3. type checking


N.B: if no type is specified, then it is any type.