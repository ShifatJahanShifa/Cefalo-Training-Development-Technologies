// // let value='shifa'

// // let truthValue=value==='shifa' 

// // if(truthValue)
// // {
// //     console.log('true')
// // }
// // else
// // {
// //     console.log('false')
// // }

// switch (undefined) {
//     default: 
//         console.log('breaking the habit');
//     case console.log(1):
//     case console.log(2):
//         console.log('shifa')
// }

// if(undefined) 
// {
//     console.log('shifa')
// }

// switch(NaN)
// {
//     case 'a': console.log('a'); break;
//     default: console.log('here'); break;
//     case 'b': console.log('b'); break; 
// }

// switch('a')
// {
//     case 'b': 
//     default: console.log('default case');
//     case 'a': console.log('actual');
    
// }

// function add(a,b)
// {
//     switch(1)
//     {
//         case 1: 
//             console.log('shifa')
//             return a+b;
//             break;
//         case 2:
//             return a-b;
//     }
// }

// console.log(add(2,3))

// while (1) {
//     console.log()
// }

// const foo = 5;
// switch (foo) {
//   case 2:
//     console.log(2);
//     break; // it encounters this break so will not continue into 'default:'
//   default:
//     console.log("default");
//   // fall-through
//   case 1:
//     console.log("1");
// }  

const Animal = "Giraffe";
switch (Animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Pig":
    console.log("This animal is not extinct.");
    break;
  case "Dinosaur":
  default:
    console.log("This animal is extinct.");
}