// Assigning to a variable as a value
const foo=  shifa => {
    console.log("Hello World");
}

foo(); 

// Passing a function as an argument to another function
function sayHello()
{
    return "Hello";
}

function greet(firstPart, name)
{
    console.log(firstPart() + " " + name);
}

greet(sayHello, 'JS');

// Returing from a function
function sayHello2()
{
    return () =>{ console.log("Hello Shifa")}
}

const hello=sayHello2();
console.log(typeof hello); // function
hello(); // Hello Shifa