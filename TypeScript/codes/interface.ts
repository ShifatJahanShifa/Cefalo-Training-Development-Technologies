export {}

// example 01
// interface User {
//     readonly dbId: number
//     email: string,
//     userId: number,   
//     googleId?: string,
//     startTrial: ()=> string, // that means it is a function that returns 
//     // startTrial(): string
//     getCoupon(couponName: string, off: number): number
// }

// // reopening interface
// interface User {
//     getToken: string
// }

// const shifa: User={dbId: 2, email: 'as@gmail.com', userId: 1,startTrial:()=>{
//     return 'trial started'
// },getCoupon: ()=>{
//     // couponName= 'cnm', off: 7
//     return 3
// },getToken: 'zx'}

// console.log(shifa.startTrial(), shifa.getCoupon('s',3),shifa)


// dexample 02 gives me error.

// interface User {
//     name: string,
//     age: number | string
// }

// interface User {
//     height: number,
//     age: string
// }

// let v: User={name: 'd', age: 23, height: 34}

// example 03
// interface BaseI {
//     height: number,
//     weight: number|string
// }

// interface Derived extends BaseI {
//     length: number,
//     weight: string
// }

// let shape: Derived={height: 4, length: 4, weight: '23'}

// example 04  UI component resue kora

// interface Component {
//     type: string;
//     render(): string;
//     }

// interface Button extends Component {
//     type: "Button",
//     onClick(value: string): void
// }

// interface Input extends Component {
//     type: "Input",
//     onClick(value: string): void
// }

// function func(c: Component)  // o shbi k nite pare. generic type of
// {
//     if(c.type==="Button")  // ekhane narrow down ta korbo actually. dekhsi j type button
//     {
//         (c as Button).onClick('s')
//     }
// }
  

// let c: Button={
//     type: "Button",
//     render() {
//         return 'rendered'
//     },
//     onClick(value){
//         console.log(value, ' clicked')
//     }
// }

// func(c)  


// example 05

// type MyNumber = number;
// type User = {
//   id: MyNumber;
//   name: string;
//   email: string;
// }

// example 06
// interface CarBattery {
//     power: number;
//     }
    
// interface Engine {
//     type: string;
//     }
    
// type HybridCar = Engine | CarBattery;

// let car: HybridCar={
//     power: 7,
//     type: 's',
// }

// example 07
// type Client = {
//     name: string | number;
// };

// interface VIPClient extends Client {
//     benefits: string[]
// }


// ---------------------------- interface -----------------------

// interface User {
//     name: string,
//     age: number
// }

// let user: User={
//     name: 's',
//     age: 29
// }

// interface User {
//     name: string
// }

// interface Person extends User {
//     name: number
// }

