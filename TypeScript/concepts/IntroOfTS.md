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

## Comparison between javascript and typescript
1. javascript is dynamically typed language whereas typescript is statically typed language.
2. javascript checks error at runtime whereas typescript checks error at compile time.
3. typescript's use of statical type, we can gain some IDE tooling support. Such as- smart code suggestion, code browsing, code restructuring which are not as comprehensive as in javascript.
4. typescript provides backing for oop elements like class, inheritance, interface, access modifier. whereas in javacsript we rely on prototype and some other means.

> To sum up, TypeScript improves JavaScript by providing the resources needed to create applications securely and with reduced mistakes.  


## Key Features of Typescript
1. Static typing
2. Type Inference
3. Enhanced tooling support
4. Easy access to javascript libraries (a.d.ts)
5. Access to advanced OOP features. 

N.B: ts and js are interoperable.