export {}

// decorator first step
//------------------------------------------- class decorator

// function Logger(target: Function){
//     console.log('constructor is called...');
// }
// @Logger  // it will be called automatically at runtime.
// class User {
//     name: string='shifa'
//     age: number=12

//     constructor(){
//         console.log('constructor is called');
        
//     }
// }

// let user: User=new User()

// ------------------------------------ decorator factory
// function decoratorFactory(msg: string) {
//     function Logger(target: Function){
//         console.log(msg);
//     }
//     return Logger
// }
// @decoratorFactory('decorator factory')  // it will be called automatically at runtime.
// class User {
//     name: string='shifa'
//     age: number=12

//     constructor(){
//         console.log('constructor is called');
        
//     }
// }

// let user: User=new User()

// ------------------------------------------------ second decorator

// function decoratorFactory(msg: string) {
//     function Logger(target: Function){
//         console.log(msg);
//     }
//     return Logger
// }

// function Template(template: string, elemId: string)
// {
//     function anotherFunction(target: Function)
//     {

//     }
//     return anotherFunction;
// }



// @decoratorFactory('decorator factory')  // it will be called automatically at runtime.
// class User {
//     name: string='shifa'
//     age: number=12

//     constructor(){
//         console.log('constructor is called');
        
//     }
// }

// let user: User=new User()  


//------------------------------------ property decorator
// instance hole prototype object, static hole constructor function.
function Capitalize(target: any, context: ClassFieldDecoratorContext){
    console.log('decorator called')
    console.log('key ',context.name, 'target', target);
}

class Product {
    @Capitalize
    name: string
    price: number

    constructor(name: string,price: number)
    {
        this.name=name
        this.price=price
    }
}

