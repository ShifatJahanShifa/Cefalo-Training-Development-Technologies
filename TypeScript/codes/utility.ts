export {}

// --------------------------------- Partial---------------------------------------

interface User {
    name: string;
    age: number;
    email: string;
  }
  
//   function createUser(user: Partial<User>): User {
//     return {
//       name: 'John Doe',
//       age: 30,
//       email: 'john.doe@example.com',
//       ...user,
//     };
//   }
  
//   const newUser = createUser({ name: 'Jane Doe' });
  
//   console.log(newUser); 

function createUser(user: Partial<User>): User {
    return {
        name: 'john doe',
        age:30,
        email: 'abc@gmail.com',
        ...user  // spread operator er maddhome ami user k add korsi and eta property r ager set kora value k override korte parbe.
    }
}

let user: User=createUser({name: 'joe doe'})
console.log(user);


// -------------------------------------- Readonly ---------------------

// interface Options {
//     optionA?: number,
//     optionB?: number
// }

// let myOption: Options={
//     optionA: 9
// }

// function logOption(option: Readonly<Options>): void 
// {
//     option.optionA=8
// }

// logOption(myOption)


//------------------------------- Awaited ------------------------------
// type Value=Awaited<Promise<string>> 
// const value: Value=await Promise.resolve('as')

// type Value1=Awaited<Promise<Promise<number>>>
// const value1: Value1=await Promise.resolve(Promise.resolve(45))
