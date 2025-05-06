"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
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
function createUser(user) {
    return __assign({ name: 'john doe', age: 30, email: 'abc@gmail.com' }, user // spread operator er maddhome ami user k add korsi and eta property r ager set kora value k override korte parbe.
    );
}
var user = createUser({ name: 'joe doe' });
console.log(user);
