
export {}


// ---------------------------------------------mapped types
// =------------------------------------------------------see the first step
// type myDogInfo={
//     name: string
// } & Record<string, string> 

// const mydoginfo: myDogInfo={
//     name: 'tommy',
//     breed: 'mutton',  // i can add any property here just because of records. I can add any number of properties
//     length: 'k',
// }

// --------------------------------------------------but now i will make thingseasier for me. 
// type myDogInfo={
//     name: string,
//     // breed: string
//     [key: string]: string | number
// }

// const mydoginfo: myDogInfo={
//     name: 'tommy',
//     breed: 'mutton',
//     age: 2
// }

// interface dogInfo {
//     name: string,
//     age: number
// }

// type OptionsFlags<Type> = {
//     [Property in keyof Type]: null
// };

// type dogType=OptionsFlags<dogInfo>



//------------------------------------ from second video ------------------------------
// type Point ={
//     x: number,
//     y: number
// }

// const origin: Point={
//     x:0,
//     y:0
// }
// // but i want that my origin remains intact. No one can change it. 
// origin.x=100 // should be error 

// so basically i need to have a concrete structure to create mapped type. 
// interface myob {
//     name: string,
//     age: number,
//     height: number,
//     study?: boolean
// }

// now the structure of mapped type. this is called factory of map type

// type mymappedtype={
//     [key in keyof myob]-?: myob[key]
// }

// now make it generic


// type mymappedtype<Type>={
//     [key in keyof Type]-?: Type[key]
// }

// type mymapfactory=mymappedtype<myob> 

// let pp: mymapfactory={

// }

// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
//   };
  
//   let obj = { x: 10, y: 20 };
//   let readonlyObj: Readonly<typeof obj> = obj
  
  
 

//------------------------------------ conditional type---------------------

// type Extends<T,U>=T extends U ? T : U  // factory or rtesolver
// type A=Extends<string,any>
// type B=Extends<number,unknown>
// type C=Extends<unknown,number> 

// so , here extends mean if we are able to assign a type to another. string to string, ok

//-------------- variation of cond. type
// function someFunction<T>(value: T) // i want to return a function from this function
// {
//     // we can do chaining if we want
//     type D= T extends number ? "type a" : T extends boolean ? "type b" : "type c" 
//     // let val: D="type a"
//     const someOtherFunction=(someArg: T extends boolean ? 
//         'type a': 'type b'     // deferred affiliation cause ts does not know at this point what is T
//     )=>{
//         // at this point someArg is union of type a and type b
//         // checking this...
//         const a: "type a" | "type b"=someArg
//     }
//     return someOtherFunction
// }

// const func=someFunction(true)

// --------------------distributive property of conditional type

// type stringOrNot<T>=T extends string ? string : never

// type AUnion= string | boolean | never

// // ------------- infer keyword

// type inferSth<T>= T extends infer U ? U : never

// type inferred=inferSth<'i am string'>

//------------------------- template literal type --------------
type world='world'

type temp=`hello ${world}`

// let value: temp='jd'