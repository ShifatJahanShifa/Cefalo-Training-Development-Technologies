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

// const shifa = new Person('shifat jahan', 'shifa', 23);
// const jashim = new Person('jashim', 'uddin', 25);
// const rahim = new Person('rahim', 'uddin', 30);  

// console.log(shifa);
// console.log(jashim);
// shifa.country='bd'
// console.log(shifa.country); // bd
// console.log(jashim.country); // undefined

// console.dir(jashim.__proto__.__proto__.__proto__)


// const obj={
//     name: 'shifa'
// }

// console.log(obj.age===undefined);
// console.log('name' in obj);
// console.log('naame' in obj);



// console.log('--------------- debug---------------------')

// console.log('integer property: String(Number(key)) === key');


// const obj={
//     name: 'shifa',
//     '+1301': 'bsse',
//     age: 23,
//     '+1300': 'bs13th'
// }

// // using for...in loop 
// for (const key in obj) {
//     console.log(+key);
// }


console.log('why the plus save?');

const obj={
    '+1301': 'shifa',
    '+1300': 'bsse',
    '+2': 'twotwo'
}


// const obj={
//     1301: 'shifa',
//     1300: 'bsse',
//     2: 'twotwo'
// }

// for(let key in obj)
// {
//     console.log(+key);

// }

// console.log('-------------------');

// // console.log(5+Number('+12'));
// // console.log(25-Number('21-'));



// console.log(Number('2.3'));
// // console.log(25-Number('21-'));


// practice

// function isEmpty(ob) {
//     for (const key in ob) {
//         return false
//     }
//     return true
// }

// let schedule = {};

// console.log( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";
// console.log( isEmpty(schedule) ); // true


// function Person(first,second,age) {
//     this.firstName=first;
//     this.lastName=second;
//     this.age=age;    
// }

// const person1=new Person('shifat jahan','shifa',23)
// console.log(person1);
// const person2=new Person('rifat jahan','rifa',23)
// console.log(person2);

const ob={
    a: 2,
    b: 3,
    23: 'd',
    4: 's'
}
console.log(ob)