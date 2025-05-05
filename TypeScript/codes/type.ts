export {}

// type voidFunc=()=> void

// // function check(a: number) {
// //     console.log(a);
// //     return 0;
// // }

// // let res=check(2)
// // console.log(res, typeof res);


// const f1: voidFunc = () => {
//     return true;
// }

// const inv=f1()
// console.log(typeof inv, inv);

// // let a: void
// // // let b: void=undefined
// // // // let c: void=void
// // // let a: void,b: void
// // let c: number=9
// // console.log(typeof a,typeof c);

// interface Person {
//     name: string,
//     age: number
// }

// function greet(person: Person) 
// {
//     console.log('hello, '+person.name);
    
// }

// let user: Person={name: 'shifa', age: 23}
// greet(user)

// let a
// a=9
// a='df'
// console.log(a);

// function f(name: any)
// {
//     console.log(name.toUpperCase())
// }

// f(9)

// function f(name: unknown)
// {
//     if(name && typeof name === 'string')
//     console.log(name.toUpperCase())
// }

// f(9)

// type Vowel='a'|'e'|'o'|'u'|'i'

// function func(stat: Vowel) {
//     switch (stat) {
//         case 'a':
            
//             break;
//         case 'i':
//             break;
//         case 'e':
//             break;
//         case 'o':
//             break;
//         case 'u':
//             let r=stat
//             break
//         default:
//             let c=stat
//             break;
//     }
// }

// const s=8 as unknown as string

// let a='hello' as const
// console.log(typeof a);
// const ob={a:9} as const
// let z = { text: "hello" } as const;
// let arr=[9,0] as const
// // arr.push(7)

// let name='jpohn'
// name='john'
// name=9  

// function convert(a) 
// {
//     a.toUpperCase()
//     a.toFixed()
// }

// convert(3)

// interface Pet {
// name: string;
// }
// class Dog {
//     name: string;
//     age: number
// }
// let pet: Pet;
// // OK, because of structural typing
// pet = new Dog();
// pet.age 

// let a: string='5'
// let b: string='y'
// a=b;


// let ob={ a: 8}
// class cl {
//     a: string
// }

// // ob=new cl()

// let s: any;
// let c: any 
// s=c

// let a: ( string | number )[]=[9,0,'k']
// console.log(typeof a);
// type inputType=(string | number)

// function sum(a: inputType, b: number)
// {
//     //
// }
// sum(4,8)

// type Person={
//     name: string,
//     age: number,
//     shout: ()=> void,
//     type: 'person'
// }

// const shifa: Person={
//     name: 'SHIFA',
//     age: 23
// }

// modifying this
// type Person={
//     [any: string]: string | number
// }

// let person: Person={
//     name: 'shifa',
//     1301: 'roll',
//     true: 1
// }

// // console.log(person)

// type Dog={
//     name: string,
//     age: number,
//     bark: ()=> void,
//     type: 'dog'
// }

// function makeNoise(dogOrPerson: Dog | Person): void 
// {
//     switch(dogOrPerson.type)
//     {
//         case "dog":
//             dogOrPerson.bark()
//             break;
//         case "person":
//             dogOrPerson.shout()
//             break;
//     }
// }  


// let seatAllotment: 'aisle' | 'middle' | 'edge'
// // seatAllotment=''

// interface face1 {
//     a: string,
//     b: number
// }

// interface face2 {
//     // a: number,
//     c: string
// }

// type newType = face1 & face2 

// // let newOb: newType

// // console.log(typeof newOb);


// let newOb: newType={
//     // t: 'd',
//     a: 'r',
//     b: 5,
//     c: 'sp'
// }

// console.log(newOb);
// console.log(typeof newOb);


// type f=number
// type s=string
// type n=f&s 
// let b: n
// let v: n
// v=b
// console.log();  

// type ob={
//     a: number
// }
// type ob2={
//     b: string
// }

// type ntype=ob & ob2


// ------------------------------------------------------- keyof operator 
// example 01
// interface Person {
//     name: string,
//     age: number,
//     location: string
// }

// type keys=keyof Person // union of keys = 'name' | 'age' | 'location'
 

// // example 02
// type obj={
//     name: 's',
//     age: 23,
// }

// type obt=keyof obj

// // example 03
// // type value={
// //     [n: number]: number,    // number index signature
// //     [e: string]: number
// // }

// // type valuet=keyof value
// // let v: valuet='n'
// // let vv: valuet=7
// // console.log(v, vv)
// // console.log(typeof v, typeof vv);


// // example 04
// // type Arrayish = { [n: number]: unknown };
// // type A = keyof Arrayish;
// // let v: A=7

// // type Mapish = { [k: string]: boolean };
// // type M = keyof Mapish;
// // let vv: M=6

// // narrowing 
// function check(value: number | string)
// {
//     console.log(typeof value);
// }

// check(8)  

// ------------------------------------ type alias ------------------------------ 

// type User={
//     name: string,
//     age: number
// }

// let user: User={
//     name: 's',
//     age: 29
// }


// type User={
//     name: string
// }

// type Person={
//     name: number
// }

// type Comb=User & Person
// let p: Comb= {
//     name: 
// }