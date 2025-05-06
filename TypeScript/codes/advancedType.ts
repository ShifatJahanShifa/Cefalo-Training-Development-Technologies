// mapped types

export {}


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
interface myob {
    name: string,
    age: number,
    height: number,
    study?: boolean
}

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
