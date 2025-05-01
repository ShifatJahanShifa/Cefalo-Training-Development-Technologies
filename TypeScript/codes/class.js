"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var Point = /** @class */ (function () {
    function Point() {
        // x: number
        // y: number 
        this._x = 0;
        this._y = 0;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (v) {
            this._x = v;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point();
// point.x=6
// point.y=9
// console.log(point.x, point.y)
// point._x(v: 7)
point.x = 7;
console.log(point.x);
