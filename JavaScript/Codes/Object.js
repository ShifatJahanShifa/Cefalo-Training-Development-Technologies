// Object Constructor
// const shifa={
//     firstName : 'shifat jahan',
//     lastName :'shifa',
//     age: 23,
//     getFullName: function(){
//         return this.firstName + ' ' + this.lastName;
//     },
// }

// copnstructor function
// function Person(first, last, age) { 
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.fullName = function() {
//         return this.firstName + ' ' + this.lastName;
//     };
//   }

const shifa = new Person('shifat jahan', 'shifa', 23);
const jashim = new Person('jashim', 'uddin', 25);
const rahim = new Person('rahim', 'uddin', 30);  

console.log(shifa);
console.log(jashim);
shifa.country='bd'
console.log(shifa.country); // bd
console.log(jashim.country); // undefined

console.dir(jashim.__proto__.__proto__.__proto__)


