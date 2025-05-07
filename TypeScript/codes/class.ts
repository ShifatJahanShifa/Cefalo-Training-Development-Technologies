export {}

// example 1
// class Car {
//     name: string
//     model: string 

//     constructor(name: string,model: string)
//     {
//         this.name=name
//         this.model=model
//     }

//     getDetails() 
//     {
//         console.log(this.name+' '+this.model)
//     }
// }

// const obj=new Car('tesla','XXX')
// obj.getDetails()

//example 2
// class Point {
//     // x: number
//     // y: number 
//     private _x=0
//     private _y=0

    
//     public get x() : number {
//         return this._x
//     }
    
//     public set x(v: number) {
//         this._x=v
//     }
// }

// const point=new Point()
// // point.x=6
// // point.y=9

// // console.log(point.x, point.y)

// // point._x(v: 7)
// point.x=7
// console.log(point.x)

// example 3
// interface pingable {
//     ping(): void 
// }

// class Bell implements pingable {
//     ping(): void {
//         console.log('pingpong');
//     }
// }

// // .. example 4
// class MySafe {
//     private secretKey = 12345;
//   }
   
//   const s = new MySafe();
   
//   // Not allowed during type checking
// //   console.log(s.secretKey);
// //   Property 'secretKey' is private and only accessible within class 'MySafe'.
   
//   // OK
//   console.log(s["secretKey"]);  


//----------------------------- example 06 ---------------------------------------------------------

// class Full{
//     name!: string
//     constructor(name: string)
//     {
//         // this.name=name
//     }
//     // Full.name='as'
// }


// -------------------- example 07---------------------------------------------

// // getetr setter

// class C {
//     _length='s'

//     get length()
//     {
//         return this._length
//     }

//     set length(value)
//     {
//         this._length=value
//     }
// }

// class C {
// _length = 0;
// get length() {
//     return this._length;
// }
// set length(value) {
//     this._length = value;
// }
// }

// let c: C=new C()
// c.length='f'


// example 08
// interface Checkable {
//     check(name: string): boolean;
//   }
   
//   class NameChecker implements Checkable {
//     check(s: string) {
// //   Parameter 's' implicitly has an 'any' type.
//       // Notice no error here
//       return s.toLowerCase() === "ok";
                   
// //   any
//     }
//   }


// example 09

// interface A {
//     x: number;
//     y?: number;
//   }
//   class C implements A {
//     x = 0;
//     y= 9
//   }
//   const c = new C();
//   c.y = 10; 

// class Base {
//     greet() {
//       console.log("Hello, world!");
//     }
//  }
   
//   class Derived extends Base {
//     // Make this parameter required
//     greet(name?: string) {
// //   Property 'greet' in type 'Derived' is not assignable to the same property in base type 'Base'.
// //     Type '(name: string) => void' is not assignable to type '() => void'.
// //       Target signature provides too few arguments. Expected 1 or more, but got 0.
//       console.log(`Hello, ${name.toUpperCase()}`);
//     }
//   }  



// ------------------------------------------- example 11 type nly define --------------------------------


// interface Animal {
//     dateOfBirth: Date;
//   }
  
//   interface Dog extends Animal {
//     breed: string;
//   }
  
//   class AnimalHouse {
//     resident: Animal;
//     constructor(animal: Animal) {
//       this.resident = animal;
//     }
//   }
  
//   class DogHouse extends AnimalHouse {
//     // ❌ Trying to redeclare with more specific type
//     // This overwrites the field set in `super()`
//    declare resident: Dog;
  
//     constructor(dog: Dog) {
//       super(dog); // ✅ dog is an Animal, so this is valid
//     }
//   }
  
//   const dogHouse = new DogHouse({
//     dateOfBirth: new Date(),
//     breed: "Labrador",
//   });
  
//   console.log(dogHouse.resident.breed); // ❌ Runtime error: resident is undefined
    


// ------------------------------------ example 12 ----------------------------------

// class demo {
//     private d: number=9
// }


//----------------------------------------- class initialization order --------------------------

// class Base {
//     baseField = (() => {
//       console.log("1️⃣ Base field initialized");
//       return "baseValue";
//     })();
  
//     constructor() {
//       console.log("2️⃣ Base constructor runs");
//       console.log("   baseField =", this.baseField);
//     }
//   }
  
//   class Derived extends Base {
//     derivedField = (() => {
//       console.log("3️⃣ Derived field initialized");
//       return "derivedValue";
//     })();
  
//     constructor() {
//       super(); // Must call super() first in derived class
//       console.log("4️⃣ Derived constructor runs");
//       console.log("   derivedField =", this.derivedField);
//     }
//   }
  
//   const obj = new Base();


// ------------------------------------ example 14, private field ------------------------------

class Box {
    #height: number=23
    weight: number=34

    get height(): number 
    {
      return this.#height
    }
}

let box: Box=new Box()
console.log(box.weight);

let box2: Box=new Box()
// console.log(box)

  // demo 2

// class Box {
//     private height: number=23
//     weight: number=34
// }

// let box: Box=new Box()
// console.log(box.weight);
// console.log(box['height'])

// ------------------------------------- example 15: static ----------------------------
// class Foo {
//   static #count = 0;

//   get count() {
//       return Foo.#count;
//   }

//   static {
//       try {
//           const lastInstances: number = 3
//           Foo.#count += lastInstances;
//       }
//       catch {}
//   }
// }



// ----------------------------------- example: 16 abstract class ----------------------------------
// abstract class Point {
//   abstract getPoint(): number

//   show(): void 
//   {
//     console.log('nothing')
//   }
// }


// class Conc extends Point {
//   getPoint(): number {
//     return 4
//   }
// }

// let d: Point=new Conc()
// console.log(d.getPoint())

