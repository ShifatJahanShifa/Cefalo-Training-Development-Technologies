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
interface pingable {
    ping(): void 
}

class Bell implements pingable {
    ping(): void {
        console.log('pingpong');
    }
}

// .. example 4
class MySafe {
    private secretKey = 12345;
  }
   
  const s = new MySafe();
   
  // Not allowed during type checking
//   console.log(s.secretKey);
//   Property 'secretKey' is private and only accessible within class 'MySafe'.
   
  // OK
  console.log(s["secretKey"]);