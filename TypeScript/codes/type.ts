export {}

type voidFunc=()=> void

// function check(a: number) {
//     console.log(a);
//     return 0;
// }

// let res=check(2)
// console.log(res, typeof res);


const f1: voidFunc = () => {
    return true;
}

const inv=f1()
console.log(typeof inv, inv);

// let a: void
// // let b: void=undefined
// // // let c: void=void
// // let a: void,b: void
// let c: number=9
// console.log(typeof a,typeof c);

interface Person {
    name: string,
    age: number
}

function greet(person: Person) 
{
    console.log('hello, '+person.name);
    
}

let user: Person={name: 'shifa', age: 23}
greet(user)