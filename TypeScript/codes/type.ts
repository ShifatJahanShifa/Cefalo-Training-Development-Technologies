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
//             break
//         default:
//             let c: never=stat
//             break;
//     }
// }

const s=8 as unknown as string

let a='hello' as const
console.log(typeof a);
const ob={a:9} as const
let z = { text: "hello" } as const;
let arr=[9,0] as const
// arr.push(7)