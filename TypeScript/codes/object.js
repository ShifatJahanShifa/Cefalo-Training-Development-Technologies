"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// example 1
// function objectTaker(user: Obj)
// {
//     console.log(user.name, user.age)
// }
// interface Obj {
//     name: string,
//     age: number
// }
// const user: Obj={name: 'shifa', age: 23}
// objectTaker(user)
// example 2
// function point(x: {x: number, y: number}): void 
// {
//     console.log('the cords are: ', x.x, x.y);
// }
// point({x: 4, y: 7})
// example 3: optional property
// function fullName(name : {first: string, middle?: string, last: string}) 
// {
//     console.log('fullname = ',name.first+(name.middle?.toString() || ' ')+name.last);
// }
// fullName({first: 'shifat jahan', last: 'shifa'})  
// example 4: can we use method? 
var account = {
    uname: 'asd#',
    id: 1,
    getBalance: function () { return 344; }
};
console.log(account.getBalance());
account = {
    uname: 'asd#',
    id: 6,
    getBalance: function () { return 78; }
};
