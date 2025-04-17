//----------------------- General methods --------------------

// Object.assign()   M 1
// Create Target Object
// const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
  
//   // Create Source Object
//   const person2 = {firstName: "Anne",lastName: "Smith",height:90};
  
//   console.log(person1);
  
//   // Assign Source to Target
//   Object.assign(person1, person2);
//   console.log(person1);


// Object.entries() M 2
// const person = {
//     firstName : "John",
//     lastName : "Doe",
//     age : 50,
//     eyeColor : "blue"
//   };
  
//   let text = Object.entries(person);   // array of key/value pairs
//   let later=text.flat(0)
//   console.log(text);
//   console.log(later);
  
//   // destructuring
//   for(let [key,value] of text) 
//   {
//     console.log(key, value);
    
//   }
  

// // Object.fromEntries()  M 3
// const fruits = [
//     ["apples", 300],
//     ["pears", 900],
//     ["bananas", 500]
//   ];
  
// const myObj = Object.fromEntries(fruits);

// console.log(myObj);


// Object.values()  M 4
// const person = {
//     firstName : "John",
//     lastName : "Doe",
//     age : 50,
//     eyeColor : "blue"
//   };
  
//   let text = Object.values(person);

//   console.log(text);
  

// Object.groupBy()  M 5
// Create an Array
// const fruits = [
//     {name:"apples", quantity:300},
//     {name:"bananas", quantity:500},
//     {name:"oranges", quantity:200},
//     {name:"kiwi", quantity:150}
//   ];
  
//   // Callback function to Group Elements
//   function myCallback({ quantity }) {
//     return quantity > 200 ? "ok" : "low";
//   }
  
//   // Group by Quantity
//   const result = Object.groupBy(fruits, myCallback);

//   console.log(result);
  

// Object.keys()   M 6
// Create an Object
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
  
//   // Get the Keys
//   const keys = Object.keys(person);

//   console.log(keys);
// // M 7
//   const copy=Object.create(person)
//   console.log(copy.age);
  
  



//------------------------------------ property management methods --------

// Object.defineProperty()  M 1
// Create an Object:
// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     language : "EN"
//   };
  
//   // Add a Property
//   Object.defineProperty(person, "year", {value:"2008"});

//   console.log(person.year);
//   Object.defineProperty(person, "language", {value : "NO"});
//   console.log(person.language);
  
  

// Object.getOwnPropertyNames M 2

// / Create an Object
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Get all Properties
const res=Object.getOwnPropertyNames(person);
console.log(res);
