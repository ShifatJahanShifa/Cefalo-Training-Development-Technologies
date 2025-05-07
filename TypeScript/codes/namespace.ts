/// <reference path='parentnamespace.ts'/>

namespace parentNS {
    export class Child extends User{
        getName()
        {
            return this.name
        }
    }
}

let child=new parentNS.Child()
child.setName("shifa")
console.log(child.getName());
